import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  setRecipes: (recipes) => set({ recipes }),

  // Favorites Management
  addFavorite: (recipeId) =>
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return {};
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Basic Recommendations Mock
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        favorites.some((favId) => r.title.includes(favId.toString()))
    );
    set({ recommendations: recommended });
  },

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));