import React from "react";

const LoadingButton = ({ isLoading, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`w-full py-3 rounded-md bg-secondary-200 hover:bg-[#57976F]  text-white-100 transition ${
        isLoading ? "disabled:opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Processing..." : children}
    </button>
  );
};

export default LoadingButton;
