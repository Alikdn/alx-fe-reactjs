import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // State for storing the search term
  favorites: [], // State for storing favorite recipe IDs
  recommendations: [], // State for storing recommended recipes
  
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

  // Function to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Compute filtered recipes based on the search term
  filteredRecipes: (state) => state.recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  ),

  // Function to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Function to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),

  // Function to generate recommendations based on favorites
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;