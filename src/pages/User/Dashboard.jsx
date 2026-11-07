import Navbar from "../../components/Navbar";
import QuickActions from "../../components/QuickActions";
import "../../styles/pages/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1>Smart Pantry — track, plan, cook</h1>
        <p>Keep your kitchen organized, avoid waste, and get recipe ideas.</p>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">Total Items</div>
          <div className="stat-card">Expiring Soon</div>
          <div className="stat-card">Recipe Ideas</div>
        </div>

        {/* New Quick Actions Box */}
        <QuickActions />
      </div>
    </>
  );
}
