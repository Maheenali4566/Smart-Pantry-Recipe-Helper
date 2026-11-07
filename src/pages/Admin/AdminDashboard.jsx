import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this missing import
import AdminNavbar from "../../components/AdminNavbar";
import "../../styles/pages/Dashboard.css";

export default function AdminDashboard() {
  return (
    <>
      <AdminNavbar />
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <p>Monitor, manage, and optimize your platform</p>

        <div className="stats-container">
          <div className="stat-card">Total Users</div>
          <div className="stat-card">Total Recipes</div>
          <div className="stat-card">Inventory Alerts</div>
        </div>

        <div className="quick-actions-section">
          <h2 className="quick-actions-title">Admin Quick Actions</h2>
          <div className="quick-actions-grid">
            <Link to="/admin/users" className="quick-action-card">
              <div className="action-icon">👥</div>
              <h3 className="action-title">Manage Users</h3>
            </Link>
            <Link to="/admin/recipes" className="quick-action-card">
              <div className="action-icon">🍲</div>
              <h3 className="action-title">Manage Recipes</h3>
            </Link>
            <Link to="/admin/inventory" className="quick-action-card">
              <div className="action-icon">📦</div>
              <h3 className="action-title">Manage Inventory</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}