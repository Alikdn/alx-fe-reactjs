// eslint-disable-next-line no-unused-vars
import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  // eslint-disable-next-line no-unused-vars
  const url = `https://api.github.com/users/${username};
  const response = await axios.get(url)`;

  // eslint-disable-next-line no-undef
  if (response.status === 200) {
    // eslint-disable-next-line no-undef
    return response.data;
  } else {
    throw new Error('User not found');
  }
};