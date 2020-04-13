import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner ease-linear rounded-full border-8 border-t-8 border-gray-200 h-48 w-48 mx-auto mt-64"></div>
    </div>
  );
};

export default LoadingSpinner;
