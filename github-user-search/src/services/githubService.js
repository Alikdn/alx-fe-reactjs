import axios from 'axios';

// Function to fetch users based on advanced search
export const fetchUsers = async (username, location, minRepos) => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?${query}`;

  const response = await axios.get(url);

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Users not found');
  }
};