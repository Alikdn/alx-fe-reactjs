import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace this with your actual authentication check logic
    const user = localStorage.getItem('user'); // For example, checking local storage
    setIsAuthenticated(!!user); // Set isAuthenticated based on the presence of a user
  }, []);

  return { isAuthenticated };
};