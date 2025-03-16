import React from "react";
import successIcon from "../../assests/success.svg";
import errorIcon from "../../assests/error.svg"; // Add an error icon

const Modal = ({ isOpen, onClose, title, type = "success", children }) => {
  if (!isOpen) return null;

  const icon = type === "success" ? successIcon : errorIcon;
  const bgColor = type === "success" ? "bg-secondary-200" : "bg-secondary-200"; // Change background color

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-11/12 bg-white-100 p-6 rounded-lg md:w-96 shadow-lg text-center flex flex-col justify-center items-center space-y-4">
        <img src={icon} alt={type} className="w-20 h-20" />
        <h2 className={`text-2xl font-semibold  text-white px-4 py-2 rounded-md`}>
          {title}
        </h2>
        <div className="mt-4">{children}</div>
        <button
          onClick={onClose}
          className={`mt-4 w-full ${bgColor} text-white-100 py-2 rounded-md`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
