// src/components/Alert.jsx
import React from "react";

const Alert = ({ message, onClose, type }) => {
  // Set styles based on the alert type
  const alertStyles = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-1/3 text-white p-4 rounded-lg shadow-lg ${alertStyles} `}
    >
      <div className="flex justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="text-white font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
