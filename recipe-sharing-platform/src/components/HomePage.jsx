import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Correctly import Link
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Delicious Recipes
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Recipe Info */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600">{recipe.summary}</p>

              {/* View Recipe Button */}
              <Link
                to={/recipe/${recipe.id}} // Correctly format the URL
                className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;