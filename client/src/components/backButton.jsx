import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Importing an icon from React Icons

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  // Check if the current location is not the home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <button
      onClick={goBack}
      className="fixed back-button bottom-5 left-5 rounded-full m-4 border-4 border-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-24 w-24 flex items-center justify-center" // Added h-24 and w-24 classes
    >
      <IoArrowBack size="2em" /> {/* Icon with a size of 2em */}
    </button>
  );
};

export default BackButton;
