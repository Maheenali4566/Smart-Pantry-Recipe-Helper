import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/pages/Auth.css";
import AuthNav from "../../components/AuthNav";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // ✅ Store the role in localStorage
      localStorage.setItem("role", role);
      
      // ✅ Navigate based on role or use redirect route
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <div className="auth-container">
      {/* ✅ Auth Navigation */}
      <AuthNav />

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="auth-link">
          Signup
        </Link>
      </p>
    </div>
  );
}