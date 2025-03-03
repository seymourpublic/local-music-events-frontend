// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetails from './pages/EventDetails';

// Import your auth services
import { getCurrentUser, logout } from './services/authService';

function App() {
  const [user, setUser] = useState(null);

  // Fetch the logged-in user (if any) when the app loads
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        // If no user is logged in or an error occurs, you can handle it here
        console.error('Not logged in or error fetching user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      // Optionally, navigate to the login page or home page
      // e.g., window.location.href = '/login';
      window.location.href = '/login';
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Router>
      {/* Pass the user and logout handler to the Navbar */}
      <Navbar user={user} onLogout={handleLogout} />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
