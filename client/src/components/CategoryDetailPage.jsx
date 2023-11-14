import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryDetailPage = ({ recipes }) => {
  const { categoryName, authorName } = useParams();
  const navigate = useNavigate();

  // Determine the filter criteria based on URL parameters
  let filteredRecipes = [];

  if (categoryName) {
    filteredRecipes = recipes.filter(
      (recipe) => recipe.category === categoryName
    );
  } else if (authorName) {
    filteredRecipes = recipes.filter((recipe) => recipe.creator === authorName);
  }

  // Sort the recipes in alphabetical order by title
  filteredRecipes.sort((a, b) => a.title.localeCompare(b.title));

  // Render the filtered and sorted recipes
  return (
    <div className="m-auto max-w-4xl min-h-screen p-5 bg-black bg-opacity-60">
      <h2 className="text-2xl text-gray-200 font-bold mb-3">
        {categoryName
          ? `Recipes in ${categoryName}`
          : `Recipes by ${authorName}`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white border h-28 border-gray-200 shadow-lg hover:shadow-xl cursor-pointer rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              {/* Optional: Image here */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <p className="text-sm text-gray-600">
                  Created by: {recipe.creator}
                </p>
                {/* Optional: More details here */}
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
