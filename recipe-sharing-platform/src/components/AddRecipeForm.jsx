// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    const ingredientList = ingredients.split(',').map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    // Submit the form (handle actual logic for submitting form data)
    const newRecipe = { title, ingredients: ingredientList, steps };
    console.log('New Recipe Submitted: ', newRecipe);

    // Reset the form
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
