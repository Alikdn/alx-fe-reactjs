// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === recipeId);

  const [title, setTitle] = useState(recipe?.title || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients || '');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Update the recipe in the store
    if (title && ingredients) {
      updateRecipe(recipeId, { title, ingredients });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;