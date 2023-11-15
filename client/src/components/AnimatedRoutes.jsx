// AnimatedRoutes.jsx

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./HomePage.jsx";
import CategoriesPage from "./CategoriesPage.jsx";
import RecipePage from "./RecipePage.jsx";
import CategoryDetailPage from "./CategoryDetailPage.jsx";

const AnimatedRoutes = ({ categories, authors, recipes, lastName }) => {
  const location = useLocation();

  // Refined animation settings
  const pageTransitions = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2, // Duration of fade-in animation
        ease: "easeOut",
        delay: 0.3, // Delay the start of the fade-in to allow the previous component to fade out
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2, // Duration of fade-out animation
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageTransitions}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage lastName={lastName} />
            </motion.div>
          }
        />
        <Route
          path="/categories"
          element={
            <motion.div
              variants={pageTransitions}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CategoriesPage categories={categories} authors={authors} />
            </motion.div>
          }
        />
        <Route
          path="/category/author/:authorName"
          element={
            <motion.div
              variants={pageTransitions}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CategoryDetailPage recipes={recipes} />
            </motion.div>
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <motion.div
              variants={pageTransitions}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CategoryDetailPage recipes={recipes} />
            </motion.div>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <motion.div
              variants={pageTransitions}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <RecipePage recipes={recipes} />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
