import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import CategoriesPage from "./components/CategoriesPage.jsx";
import RecipePage from "./components/RecipePage.jsx";
import recipesData from "./data/recipes.json";
import CategoryDetailPage from "./components/CategoryDetailPage.jsx"; // This is a new component

function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setRecipes(recipesData.recipes);
    const extractedCategories = [
      ...new Set(recipesData.recipes.map((recipe) => recipe.category)),
    ];
    const extractedAuthors = [
      ...new Set(recipesData.recipes.map((recipe) => recipe.creator)),
    ];
    setCategories(extractedCategories);
    setAuthors(extractedAuthors);
  }, []);

  // App Component

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/categories"
          element={<CategoriesPage categories={categories} authors={authors} />}
        />
        <Route
          path="/category/author/:authorName"
          element={<CategoryDetailPage recipes={recipes} />}
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
