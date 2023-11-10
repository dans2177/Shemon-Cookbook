import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryDetailPage = ({ recipes }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredRecipes = Object.entries(recipes).filter(
    ([, recipe]) => recipe.Category === categoryName
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Recipes in {categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map(([title, recipe], index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer"
            onClick={() => navigate(`/recipe/${recipe.UniqueID}`)}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">
              Created by: {recipe.Creator}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
