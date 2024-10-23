import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";

const Signup = () => {
  const { url } = useAuth(); // Get the URL from context
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [alertType, setAlertType] = useState(""); // State to manage alert type
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); //Sucess message
        console.log(data.message);
        setShowAlert(true);
        setAlertType("success");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setMessage(data.message || "Singup failed"); // Error message
        console.log(data.message);
        setShowAlert(true);
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("An error occurred during signup. Please try again later.");
      setShowAlert(true);
      setAlertType("error");
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close alert
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-spotify">
      {showAlert && (
        <Alert message={message} onClose={handleCloseAlert} type={alertType} />
      )}{" "}
      {/* Render the alert */}
      {/* Logo */}
      <img
        src="https://m.media-amazon.com/images/I/51rttY7a+9L.png"
        alt="App Logo"
        className="w-12 mb-6"
      />
      {/* Adjust the logo size */}
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Sign up for Spotify
      </h2>
      {/* Social Signup Options*/}
      <div className="flex flex-col space-y-4 mb-6 w-full max-w-md">
        <button className="flex items-center justify-center w-full py-2 text-center text-white bg-black border-white border-2 rounded-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" // Google logo from flaticon
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
      <div className="relative my-6 flex items-center w-full max-w-md">
        <div className="flex-grow border-t border-gray-600"></div>{" "}
        {/* Line part */}
        <span className="px-3 text-sm text-white">OR</span>
        <div className="flex-grow border-t border-gray-600"></div>{" "}
        {/* Line part */}
      </div>
      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 text-white bg-black boder-white border-2 rounded-full focus:ring-2 focus:ring-white focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">username</label>
          <input
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mt-1 text-white bg-black boder-white border-2 rounded-full focus:ring-2 focus:ring-white focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 text-white bg-black boder-white border-2 rounded-full focus:ring-2 focus:ring-white focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-lg font-bold text-black bg-green-500 rounded-full hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center mt-6">
        Already have an account?{" "}
        <Link to="/" className="text-green-500 hover:underline">
          Log in
        </Link>
        .
      </p>
    </div>
  );
};

export default Signup;
