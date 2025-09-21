import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">GreenCart</h2>
      </div>
      <div className="nav-right">
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/simulation" className="nav-link">Simulation</NavLink>
        <NavLink to="/drivers" className="nav-link">Drivers</NavLink>
        <NavLink to="/routes" className="nav-link">Routes</NavLink>
        <NavLink to="/orders" className="nav-link">Orders</NavLink>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
