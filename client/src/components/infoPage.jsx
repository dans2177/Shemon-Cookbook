import React from "react";
import constructionImage from "../assests/construction.png"; // Adjust the path as per your project structure
import { FaPhoneAlt } from "react-icons/fa"; // Example icon, you can choose others

const ConstructionPage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${constructionImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="p-10 border-8  border-gray-900 rounded-lg bg-white shadow-lg max-w-lg w-full">
        <h1 className="text-2xl text-center  font-bold mb-4">
          🚧 Under Construction 🚧
        </h1>
        <p className="mb-2">Hey! This website is still under construction...</p>
        <br />
        <div className="flex justify-center items-center mb-4">
          <FaPhoneAlt className="text-lg mr-2" />
          <span>605-215-4285</span>
        </div>
        <br />
        <p className="mb-4">
          Until then, text me any recipes you want to add/change! The list below
          is what I need to add it to the database.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Title</li>
          <li>Creator</li>
          <li>Ingredients</li>
          <li>Instructions</li>
          <li>Notes</li>
        </ul>
        <p>
          Please have it typed out and I'll add it as soon as possible.
          <br />
          (Feedback on how to improve always appreciated.)
          <br />
          <br />
          Hope you enjoy the site!!
          <br />
          Daniel Shemon
        </p>
      </div>
    </div>
  );
};

export default ConstructionPage;
