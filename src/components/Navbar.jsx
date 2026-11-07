import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"> 
        <img src="/src/assets/images/1.jpg" alt="Logo" />
        <span>Smart Pantry</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/pantry">Pantry</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/shopping">Shopping</Link></li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
