import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryDetailPage = ({ recipes }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Check if recipes is undefined or null
  if (!recipes) {
    return <div>Loading recipes...</div>;
  }

  // Extract unique Creators
  const uniqueCreators = Array.from(
    new Set(Object.values(recipes).map((recipe) => recipe.Creator))
  );

  const filteredRecipes = Object.entries(recipes).filter(
    ([, recipe]) => recipe.Category === categoryName
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Recipes in {categoryName}</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Column for Creators */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Creators</h3>
          <ul>
            {uniqueCreators.map((creator, index) => (
              <li key={index}>{creator}</li>
            ))}
          </ul>
        </div>
        {/* Column for Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul>
            {filteredRecipes.map(([category], index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Third Column (Empty) */}
        <div>{/* This column is intentionally left empty */}</div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
