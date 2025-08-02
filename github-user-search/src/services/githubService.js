import axios from 'axios';

export const fetchAdvancedUsers = async ({ username, location, minRepos }, page = 1) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}&per_page=10&page=${page}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`
    }
  });

  return response.data;
};