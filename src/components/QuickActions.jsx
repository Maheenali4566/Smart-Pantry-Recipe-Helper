import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="quick-actions-section">
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="quick-actions-grid">
        {/* Navigate to add form in Pantry */}
        <Link to="/pantry#add-form" className="quick-action-card add-item">
          <div className="action-icon">➕</div>
          <h3 className="action-title">Add Item</h3>
        </Link>

        {/* View full pantry */}
        <Link to="/pantry" className="quick-action-card view-pantry">
          <div className="action-icon">📦</div>
          <h3 className="action-title">View Pantry</h3>
        </Link>

        <Link to="/shopping" className="quick-action-card shopping-list">
         <div className="action-icon">🛒</div>
         <h3 className="action-title">Shopping List</h3>
        </Link>

      </div>
    </div>
  );
}
