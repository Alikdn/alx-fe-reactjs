import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Function to set the entire list of recipes
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Function to add a new recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }]
  })),

  // Function to delete a recipe by its ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),

  // Function to update an existing recipe by its ID
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
}));

export default useRecipeStore;