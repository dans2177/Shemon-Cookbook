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

  // Render the filtered recipes
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">
        {categoryName
          ? `Recipes in ${categoryName}`
          : `Recipes by ${authorName}`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-sm text-gray-600">
                Created by: {recipe.creator}
              </p>
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
