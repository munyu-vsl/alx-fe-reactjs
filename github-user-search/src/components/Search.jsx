import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
  const [form, setForm] = useState({ username: '', location: '', minRepos: '' });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, nextPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setPage(nextPage);

    try {
      const results = await fetchAdvancedUsers(form, nextPage);
      setUsers(results.items);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repos"
          value={form.minRepos}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex items-center gap-4 bg-white shadow-sm"
          >
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={(e) => handleSubmit(e, page + 1)}
          className="mt-6 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
        >
          Load More
        </button>
      )}
    </div>
  );
};
export default Search;