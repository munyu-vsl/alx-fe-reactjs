// src/components/Profile.jsx
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes defined HERE */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}