import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">GreenCart</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/simulation">Simulation</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/routes">Routes</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </header>
  );
}