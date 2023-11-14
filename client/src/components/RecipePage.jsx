// RecipePage Component

import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = ({ recipes }) => {
  const { id } = useParams();

  // Find the recipe based on the id from the URL.
  // Note: Make sure the id from the URL is of the same type (string/number) as in your recipes data.
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);

  // If no recipe is found, display a message.
  if (!recipe) return <div>No recipe selected</div>;

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <div className="mb-4">
        <strong>Category:</strong> {recipe.category}
      </div>
      <div className="mb-4">
        <strong>Ingredients:</strong>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Instructions:</strong>
        <ol className="list-decimal pl-6">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      {recipe.notes && (
        <div className="mb-4">
          <strong>Notes:</strong> {recipe.notes}
        </div>
      )}
    </div>
  );
};

export default RecipePage;
