// src/pages/Register.js
import React from 'react';
import SignupForm from '../components/SignupForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = (data) => {
    // Optionally log the user in or navigate them to login page after registration
    navigate('/login');
  };

  return (
    <div>
      <SignupForm onRegisterSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default Register;
