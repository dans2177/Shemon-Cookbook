import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);

  if (!recipe) return <div>No recipe selected</div>;

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-start overflow-x-hidden pb-28">
      <h2
        className={`text-4xl md:text-6xl font-bold mb-2 p-4 md:p-8 ${
          !recipe.notes ? "text-6xl md:text-8xl" : ""
        }`}
      >
        {recipe.title}
      </h2>
      {recipe.notes && (
        <div className="text-xl md:text-2xl mb-4 md:mb-8 pl-4 md:pl-8">
          <strong>Notes:</strong> {recipe.notes}
        </div>
      )}
      <hr className="border-2 w-full mb-4 border-black" />
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4 w-full p-4 md:p-8 ">
        <div className="md:col-span-1 ml-6">
          <strong className="text-xl md:text-2xl">Ingredients:</strong>
          <ul className="list-disc pl-4 text-base  md:text-sm md:pl-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li className="text-xl md:text-2xl m-2 md:m-4" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 md:border-l-2 border-black md:h-screen pl-4 ml-4">
          <strong className="text-xl md:text-2xl">Instructions:</strong>
          <ol className="list-decimal pl-4 text-lg md:pl-6">
            {recipe.instructions.map((instruction, index) => (
              <li className="text-xl md:text-2xl m-2 md:m-4" key={index}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
