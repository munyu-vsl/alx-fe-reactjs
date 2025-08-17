import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="text-center mt-10 text-red-600 text-lg">
        Recipe not found. <Link to="/" className="text-blue-500 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}