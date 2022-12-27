import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-gradient-to-tr from-gray-800 to-gray-600 rounded-lg py-1 px-6 text-white"
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
