import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesPage = ({ categories }) => {
  const navigate = useNavigate();

  if (!categories || categories.length === 0) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <button
              className="text-blue-600 hover:text-blue-800"
              onClick={() => navigate(`/category/${category}`)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
