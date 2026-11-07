import { Link } from "react-router-dom";
import "../styles/components/AuthNav.css";

export default function AuthNav() {
  return (
    <nav className="auth-nav">
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
