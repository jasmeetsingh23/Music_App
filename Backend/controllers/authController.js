import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup function
export const signup = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if user already exists by email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();

    // Return success message and status
    res
      .status(201)
      .json({ message: "User created successfully", userId: user._id });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error during signup" });
  }
};

// Login function
export const login = async (req, res) => {
  const { loginIdentifier, password } = req.body;

  try {
    // Find user by email or username
    const user = await User.findOne({
      $or: [{ email: loginIdentifier }, { username: loginIdentifier }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return success message, token, and user info
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};
