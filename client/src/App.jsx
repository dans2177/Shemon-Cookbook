// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
import recipesData from "./data/recipes.json";
import BackButton from "./components/backButton.jsx";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setRecipes(recipesData.recipes);
    const extractedCategories = [
      ...new Set(recipesData.recipes.map((recipe) => recipe.category)),
    ];
    const extractedAuthors = [
      ...new Set(recipesData.recipes.map((recipe) => recipe.creator)),
    ];
    setLastName(recipesData.lastName);
    setCategories(extractedCategories);
    setAuthors(extractedAuthors);
  }, []);

  return (
    <Router>
      <AnimatedRoutes
        categories={categories}
        authors={authors}
        recipes={recipes}
        lastName={lastName}
      />
      <BackButton />
    </Router>
  );
}

export default App;
