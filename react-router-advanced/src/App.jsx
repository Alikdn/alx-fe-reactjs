import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import your components
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | {' '}
          <Link to="/profile/details">Profile Details</Link> | {' '}
          <Link to="/profile/settings">Profile Settings</Link> | {' '}
          <Link to="/blog/1">Blog Post 1</Link> | {' '}
          <Link to="/blog/2">Blog Post 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;