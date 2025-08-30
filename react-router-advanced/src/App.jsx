import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Route for Profile */}
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        {/* ✅ Dynamic Route for Blog Post */}
        <Route path="/posts/:postId" element={<Post />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;