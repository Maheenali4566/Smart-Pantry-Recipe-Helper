import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/pages/Auth.css";
import AuthNav from "../../components/AuthNav";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Signup successful! You can now login.");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-container">
      <AuthNav />
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/" className="auth-link">Login</Link></p>
    </div>
  );
}
