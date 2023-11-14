import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);

  if (!recipe) return <div>No recipe selected</div>;

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center">
      <h2
        className={`text-6xl font-bold mb-2 p-8 ${
          !recipe.notes ? "text-8xl" : ""
        }`}
      >
        {recipe.title}
      </h2>
      {recipe.notes && (
        <div className="mb-4">
          <strong>Notes:</strong> {recipe.notes}
        </div>
      )}
      <hr className="border-2 w-full mb-4" />

      <div className="grid grid-cols-4 gap-4 w-full p-8">
        <div className="col-span-1">
          <strong>Ingredients:</strong>
          <ul className="list-disc pl-6 text-sm">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2">
          <strong>Instructions:</strong>
          <ol className="list-decimal pl-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
