import React from "react";
import { Link } from "react-router-dom";

const CategoriesPage = ({ categories, authors }) => {
  return (
    <div className="bg-yellow-700 min-h-screen flex overflow-hidden">
      {/* Authors Column */}
      <div className="flex flex-col overflow-y-auto w-1/4 h-screen p-4 md:pl-20">
        <h2 className="pt-10 text-lg font-montserrat">Authors</h2>
        <ul>
          {authors.map((author, index) => (
            <Link
              to={`/category/author/${author}`}
              key={index}
              className="text-2xl font-architectsDaughter md:text-4xl mb-2 py-2 block hover:text-customTan"
            >
              {author}
            </Link>
          ))}
        </ul>
      </div>

      {/* Categories Column */}
      <div className="w-1/2 p-4">
        <div className="flex flex-col gap-4 overflow-y-auto">
          <h2 className="pt-10 text-lg font-montserrat">Categories</h2>
          {categories.map((category, index) => (
            <Link
              to={`/category/${category}`}
              key={index}
              className="text-4xl md:text-6xl font-bebas p-4 hover:bg-customTan"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
      {/* Side Column with Vertical Line and Text */}
      <div className="relative hidden bg-customTan h-screen lg:flex md:flex-col md:justify-end md:w-1/4"></div>
    </div>
  );
};

export default CategoriesPage;
