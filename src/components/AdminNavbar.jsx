import { Link, useLocation } from "react-router-dom";
import React from "react";
import "../styles/pages/AdminNavbar.css";

export default function AdminNavbar() {
  const location = useLocation();

  const links = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/users", label: "Manage Users" },
    { path: "/admin/recipes", label: "Manage Recipes" },
    { path: "/admin/inventory", label: "Manage Inventory" },
  ];

  return (
    <nav className="admin-navbar">
      <div className="navbar-brand">Admin Panel</div>
      <ul className="admin-nav-links">
        {links.map((link) => (
          <li
            key={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
