// components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic, e.g., clearing authentication tokens
    // Assuming logout is successful
    navigate('/login');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
