import React, { useState } from "react";
import "../../styles/pages/ManageInventory.css";

export default function ManageInventory() {
  const [items, setItems] = useState([
    { id: 1, name: "Rice", quantity: 10, unit: "kg" },
    { id: 2, name: "Sugar", quantity: 5, unit: "kg" },
    { id: 3, name: "Milk", quantity: 12, unit: "liters" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="inventory-container">
      <h2>📦 Manage Inventory</h2>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  ❌ Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
