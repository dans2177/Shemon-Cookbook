import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import CategoriesPage from "./components/CategoriesPage.jsx";
import RecipePage from "./components/RecipePage.jsx";
import recipesData from "./data/recipes.json"; // Assuming the JSON data is stored here
import CategoryDetailPage from "./components/CategoryDetailPage.jsx"; // This is a new component

function App() {
  const [recipes, setRecipes] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Set the recipes
    setRecipes(recipesData);

    // Extract categories from recipes
    const extractedCategories = new Set(
      Object.values(recipesData).map((recipe) => recipe.Category)
    );
    setCategories([...extractedCategories]);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categories"
          element={<CategoriesPage categories={categories} />}
        />
        <Route
          path="/category/:categoryName"
          element={<CategoryDetailPage recipes={recipes} />}
        />
        <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
