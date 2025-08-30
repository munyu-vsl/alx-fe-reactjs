import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <nav>
      <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

export default Profile;