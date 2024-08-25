import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Trigger filtering when recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <ul>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </ul>
  );
};

export default RecipeList;