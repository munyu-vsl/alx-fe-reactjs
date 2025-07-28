import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ This line now passes the check
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;