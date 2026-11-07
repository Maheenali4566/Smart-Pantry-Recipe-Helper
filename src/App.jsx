import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// User Pages
import Dashboard from "./pages/User/Dashboard";
import Pantry from "./pages/User/Pantry";
import Recipes from "./pages/User/Recipes";
import ShoppingList from "./pages/User/ShoppingList";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageRecipes from "./pages/Admin/ManageRecipes";
import ManageInventory from "./pages/Admin/ManageInventory";

// ✅ Helper functions to check roles
const isAdmin = () => {
  const role = localStorage.getItem("role");
  return role === "admin";
};

const isUser = () => {
  const role = localStorage.getItem("role");
  return role === "user";
};

// ✅ Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem("role");
  
  if (!userRole) {
    return <Navigate to="/" />;
  }
  
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Redirect after login based on role */}
        <Route
          path="/redirect"
          element={
            isAdmin() ? (
              <Navigate to="/admin" />
            ) : isUser() ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* User Routes - Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pantry"
          element={
            <ProtectedRoute requiredRole="user">
              <Pantry />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes"
          element={
            <ProtectedRoute requiredRole="user">
              <Recipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shopping"
          element={
            <ProtectedRoute requiredRole="user">
              <ShoppingList />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes - Protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/recipes"
          element={
            <ProtectedRoute requiredRole="admin">
              <ManageRecipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <ProtectedRoute requiredRole="admin">
              <ManageInventory />
            </ProtectedRoute>
          }
        />

        {/* Catch all route - redirect to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}