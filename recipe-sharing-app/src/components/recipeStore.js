import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state
  setRecipes: (newRecipes) => set({ recipes: newRecipes }), // Function to update recipes
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
}));

export default useRecipeStore;