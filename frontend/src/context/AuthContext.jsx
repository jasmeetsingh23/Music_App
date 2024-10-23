import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }

    // Construct the URL string
    const constructedUrl = `http://localhost:8080`; // Change "localhost" to your desired domain if needed
    setUrl(constructedUrl);
  }, []);

  return (
    <AuthContext.Provider value={{ token, url }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
