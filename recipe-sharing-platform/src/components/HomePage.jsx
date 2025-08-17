import React, { useState, useEffect } from 'react';
import data from '../data.json';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data on mount
    setRecipes(data);
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map(({ id, title, summary, image }) => (
          <article
            key={id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={image}
              alt={title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">{summary}</p>
              <a
                href={`/recipes/${id}`}
                className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Recipe &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}