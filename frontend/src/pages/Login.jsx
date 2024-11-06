import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, url } = useAuth(); // Get the URL from context
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginIdentifier, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store the token in localStorage
        // localStorage.setItem("token", data.token);
        login(data.token);
        setMessage("Login successful!"); // Success message
        setShowAlert(true);
        setAlertType("success");
        navigate("/home");
        console.log(data.message);
        // console.log(data);
      } else {
        setMessage(data.message || "Login failed"); // Error message
        console.log(data.message);
        setAlertType("error");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
      setShowAlert(true);
      setAlertType("error");
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false); // Close alert
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white font-spotify "
      style={{
        background: "	#202020",
      }}
    >
      {showAlert && (
        <Alert message={message} onClose={handleCloseAlert} type={alertType} />
      )}{" "}
      {/* Render the alert */}
      <div
        className="w-full max-w-md p-8 space-y-6  rounded-lg shadow-lg  "
        style={{ background: "#121212" }}
      >
        <div className="flex justify-center mb-6">
          <img
            src="https://m.media-amazon.com/images/I/51rttY7a+9L.png"
            alt="App Logo"
            className="w-12 "
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-white">
          Log in to Spotify
        </h2>
        {/* Social Login Options */}
        <div className="flex flex-col space-y-4">
          <button
            className="flex items-center justify-center w-full py-2 text-center border-white border-2 text-white rounded-full"
            style={{ background: "#121212" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" // Google logo from flaticon
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>
        <div className="relative my-6 flex items-center">
          <div className="flex-grow border-t border-gray-600"></div>{" "}
          {/* Line part */}
          <span className="px-3 text-sm text-white">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>{" "}
          {/* Line part */}
        </div>
        {/* Email Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold">
              Email address or username
            </label>
            <input
              type="text"
              value={loginIdentifier}
              onChange={(e) => setLoginIdentifier(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-white border-2 border-white rounded-full focus:ring-2 focus:ring-white focus:outline-none"
              style={{ background: "#121212" }}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-white border-2 border-white rounded-full focus:ring-2 focus:ring-white focus:outline-none "
              style={{ background: "#121212" }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-lg font-bold text-black bg-green-500 rounded-full hover:bg-green-600"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
