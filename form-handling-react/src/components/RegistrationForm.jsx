import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}  // Controlled input
          onChange={(e) => setUsername(e.target.value)} // Update state on change
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}  // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}  // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state on change
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;