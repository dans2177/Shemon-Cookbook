// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
import recipesData from "./data/recipes.json";
import BackButton from "./components/backButton.jsx";
import InfoPage from "./components/infoPage.jsx";

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
    <div className="safe-area">
      <Router>
        <AnimatedRoutes
          categories={categories}
          authors={authors}
          recipes={recipes}
          lastName={lastName}
          InfoPage={InfoPage}
        />
        <BackButton />
      </Router>
    </div>
  );
}

export default App;
