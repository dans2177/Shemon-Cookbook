import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = ({ recipes }) => {
  const { id } = useParams();

  const recipeEntry = Object.entries(recipes).find(
    ([, recipe]) => recipe.UniqueID === id
  );

  const recipe = recipeEntry ? recipeEntry[1] : null;

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const renderIngredients = (ingredients) => {
    if (Array.isArray(ingredients)) {
      return ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ));
    } else if (typeof ingredients === "object") {
      return Object.entries(ingredients).map(
        ([sectionName, sectionIngredients], index) => (
          <div key={index}>
            <h4 className="text-lg font-bold">{sectionName}</h4>
            <ul>
              {sectionIngredients.map((ingredient, subIndex) => (
                <li key={subIndex}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )
      );
    }
  };

  const renderInstructions = (instructions) => {
    if (typeof instructions === "string") {
      return <p>{instructions}</p>;
    } else if (Array.isArray(instructions)) {
      return instructions.map((instruction, index) => (
        <p key={index}>{instruction}</p>
      ));
    } else if (typeof instructions === "object") {
      return Object.entries(instructions).map(([key, value], index) => (
        <p key={index}>
          <strong>{key}:</strong> {value}
        </p>
      ));
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">{recipeEntry[0]}</h2>
      <p>
        <strong>Created by:</strong> {recipe.Creator}
      </p>

      <h3 className="text-xl font-bold mt-4">Ingredients</h3>
      <ul>{renderIngredients(recipe.Ingredients)}</ul>

      <h3 className="text-xl font-bold mt-4">Instructions</h3>
      {renderInstructions(recipe.Instructions)}
    </div>
  );
};

export default RecipePage;
