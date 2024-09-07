import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth'; // Make sure this path is correct

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the custom hook to get the authentication status
  const location = useLocation(); // Get the current location to redirect back after login

  if (!isAuthenticated) {
    // Redirect to the home page if not authenticated
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children; // Render the children components if authenticated
}

export default ProtectedRoute;