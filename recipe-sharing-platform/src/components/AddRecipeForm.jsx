// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    else {
      const ingredientList = ingredients.split(',').map((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients.';
      }
    }
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = { title, ingredients: ingredients.split(','), steps };
      console.log('New Recipe Submitted: ', newRecipe);

      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg md:max-w-3xl md:p-10">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-lg md:px-6 md:py-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="ingredients"
          >
            Ingredients (separated by commas)
          </label>
          <textarea
            id="ingredients"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-lg md:px-6 md:py-3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-lg md:px-6 md:py-3"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && <p className="text-red-500">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out md:py-3 md:text-lg"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
