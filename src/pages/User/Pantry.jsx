import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../styles/pages/Pantry.css";

export default function Pantry() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    qty: "",
    expiry: ""
  });

  // Load pantry items from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("pantryItems")) || [];
    setItems(stored);
  }, []);

  // Save pantry items to localStorage
  const saveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("pantryItems", JSON.stringify(newItems));
  };

  // Add a new item
  const handleAdd = () => {
    const name = prompt("Enter item name:");
    const qty = prompt("Enter quantity (e.g., 1L, 500g, etc.):");
    const expiry = prompt("Enter expiry date (YYYY-MM-DD) or leave blank:");

    if (name) {
      const newItem = {
        id: Date.now(),
        name,
        qty,
        expiry: expiry || null,
      };
      saveItems([...items, newItem]);
    }
  };

  // Start editing an item
  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditForm({
      name: item.name,
      qty: item.qty,
      expiry: item.expiry || ""
    });
  };

  // Save edited item
  const handleSaveEdit = () => {
    if (!editForm.name.trim()) {
      alert("Item name is required!");
      return;
    }

    const updatedItems = items.map(item => 
      item.id === editingItem 
        ? {
            ...item,
            name: editForm.name.trim(),
            qty: editForm.qty.trim(),
            expiry: editForm.expiry || null
          }
        : item
    );

    saveItems(updatedItems);
    setEditingItem(null);
    setEditForm({ name: "", qty: "", expiry: "" });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditForm({ name: "", qty: "", expiry: "" });
  };

  // Delete an item
  const handleDelete = (id) => {
    const filtered = items.filter((i) => i.id !== id);
    saveItems(filtered);
  };

  // Calculate days left
  const getDaysLeft = (expiry) => {
    if (!expiry) return null;
    const today = new Date();
    const exp = new Date(expiry);
    const diff = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  // Filter items
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="pantry-container">
        <h2>My Pantry</h2>
        <p>View, edit, and manage items — expiry highlighted.</p>

        <div className="pantry-header">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="add-btn" onClick={handleAdd}>
            Add new item
          </button>
        </div>

        <div className="pantry-items">
          {filteredItems.map((item) => {
            const daysLeft = getDaysLeft(item.expiry);
            const expired = daysLeft !== null && daysLeft < 0;
            const isEditing = editingItem === item.id;

            return (
              <div key={item.id} className={`item-card ${isEditing ? 'editing' : ''}`}>
                {isEditing ? (
                  // Edit mode
                  <div className="edit-form">
                    <div className="form-group">
                      <label>Item Name:</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        placeholder="Enter item name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Quantity:</label>
                      <input
                        type="text"
                        value={editForm.qty}
                        onChange={(e) => setEditForm({...editForm, qty: e.target.value})}
                        placeholder="e.g., 1L, 500g"
                      />
                    </div>
                    <div className="form-group">
                      <label>Expiry Date:</label>
                      <input
                        type="date"
                        value={editForm.expiry}
                        onChange={(e) => setEditForm({...editForm, expiry: e.target.value})}
                      />
                    </div>
                    <div className="edit-actions">
                      <button className="save-btn" onClick={handleSaveEdit}>
                        Save
                      </button>
                      <button className="cancel-btn" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View mode
                  <>
                    <h3>{item.name}</h3>
                    <p>Qty: {item.qty}</p>
                    <div className="expiry-info">
                      {expired ? (
                        <span className="expired">Expired</span>
                      ) : daysLeft !== null ? (
                        <span className="days-left">{daysLeft}d</span>
                      ) : (
                        <span className="no-expiry">No expiry</span>
                      )}
                      {item.expiry && <span>{item.expiry}</span>}
                    </div>
                    <div className="item-actions">
                      <button 
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="empty-state">
            <p>No items found. {search ? 'Try a different search term.' : 'Add your first item!'}</p>
          </div>
        )}
      </div>
    </>
  );
}