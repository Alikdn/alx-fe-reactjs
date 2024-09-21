// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService'; // Import the GitHub API service

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]); // Clear previous results

    try {
      const data = await fetchUsers(searchTerm, location, minRepos);
      setUsers(data.items);
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
        <input
          type="text"
          className="border p-2 w-full rounded mt-3"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 w-full rounded mt-3"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
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

      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id} className="bg-white shadow p-4 rounded-lg mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-2xl font-bold mt-4">{user.login}</h2>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos || 'N/A'}</p>
              <a
                href={user.html_url}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;