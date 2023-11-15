import React from "react";
import { useParams, useNavigate } from "react-router-dom";

//Images For Categories/Authors 
import mainDishImage from "../assests/mainDishImage.png";
import bakedGoodsImage from "../assests/bakedGoodsImage.png";
import dessertImage from "../assests/dessertImage.png";
import sideDishImage from "../assests/sideDishImage.png";
import authorImage from "../assests/authorImage.png";
import otherImage from "../assests/otherImage.png";

const CategoryDetailPage = ({ recipes }) => {
  const { categoryName, authorName } = useParams();
  const navigate = useNavigate();

  let filteredRecipes = [];

  if (categoryName) {
    filteredRecipes = recipes.filter(
      (recipe) => recipe.category === categoryName
    );
  } else if (authorName) {
    filteredRecipes = recipes.filter((recipe) => recipe.creator === authorName);
  }
  const categoryImages = {
    "Main Dish": mainDishImage,
    "Baked Goods": bakedGoodsImage,
    Dessert: dessertImage,
    "Side Dish": sideDishImage,
    Other: otherImage,
  };
  filteredRecipes.sort((a, b) => a.title.localeCompare(b.title));
  const backgroundImage = categoryName
    ? categoryImages[categoryName]
    : authorImage;

  return (
    <div
      className="w-full h-auto overflow-y-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "fill", // Adjust as needed
        backgroundRepeat: "repeat", // repeat
        backgroundPosition: "center", // Adjust as needed
        zIndex: "",
      }}
    >
      <div className="m-auto max-w-4xl min-h-screen p-5  bg-black bg-opacity-90">
        <h2 className="text-4xl pt-8 font-montserrat text-gray-200 font-bold mb-3">
          {categoryName
            ? `Recipes in ${categoryName}`
            : `Recipes by ${authorName}`}
        </h2>
        <div className="flex flex-wrap mb-28 -mx-2">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <div key={index} className="px-2 w-full md:w-1/2 lg:w-1/3">
                <div
                  className="flex flex-col h-36 border-b-2 border-black flex-1 bg-white border shadow-lg hover:shadow-xl cursor-pointer overflow-hidden hover:transform hover:scale-105 transition duration-300 ease-in-out mb-4"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  <div className="p-4">
                    <h3 className="text-2xl font-bebas tracking-widest mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-lg font-architectsDaughter text-gray-600">
                      Created by: {recipe.creator}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
