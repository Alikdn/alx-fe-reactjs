// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;