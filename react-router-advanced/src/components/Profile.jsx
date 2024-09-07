import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <a href="/profile/details">Profile Details</a> | {' '}
        <a href="/profile/settings">Profile Settings</a>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Profile;