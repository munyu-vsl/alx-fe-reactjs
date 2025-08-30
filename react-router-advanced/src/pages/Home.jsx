import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/profile">Go to Profile</Link> | <Link to="/posts/123">View Post</Link>
  </div>
);

export default Home;