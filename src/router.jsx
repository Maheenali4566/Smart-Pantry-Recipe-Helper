import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/User/Dashboard";
import Pantry from "./pages/User/Pantry";
import Recipes from "./pages/User/Recipes";
import ShoppingList from "./pages/User/ShoppingList";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageRecipes from "./pages/Admin/ManageRecipes";
import ManageInventory from "./pages/Admin/ManageInventory";  

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/shopping" element={<ShoppingList />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/recipes" element={<ManageRecipes />} />
        <Route path="/admin/inventory" element={<ManageInventory />} />
      </Routes>
    </BrowserRouter>
  );
}
