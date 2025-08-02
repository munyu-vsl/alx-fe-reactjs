import axios from 'axios';

export const fetchAdvancedUsers = async ({ username, location, minRepos }, page = 1) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get('https://api.github.com/search/users', {
    params: {
      q: query.trim(),
      per_page: 10,
      page,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`,
    },
  });

  return response.data;
};