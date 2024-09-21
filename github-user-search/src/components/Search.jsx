// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the GitHub API service

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null); // Clear previous results

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form onSubmit={handleSearch} className="mb-5">
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="bg-white shadow p-4 rounded-lg text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">{userData.login}</h2>
          <a
            href={userData.html_url}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;