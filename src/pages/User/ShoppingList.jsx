import { useState } from "react";
import Navbar from "../../components/Navbar";
import "../../styles/pages/ShoppingList.css";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Vanilla Essence", quantity: 1, bought: false },
    { id: 2, name: "Chocolate", quantity: 10, bought: false },
    { id: 3, name: "Rice", quantity: 1, bought: false },
    { id: 4, name: "Milk", quantity: 1, bought: false },
  ]);

  const [newItem, setNewItem] = useState({ name: "", quantity: 1 });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name.trim()) {
      const item = {
        id: Date.now(),
        name: newItem.name.trim(),
        quantity: parseInt(newItem.quantity) || 1,
        bought: false,
      };
      setItems([...items, item]);
      setNewItem({ name: "", quantity: 1 });
    }
  };

  const toggleBought = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="shopping-container">
        <h2>Shopping List</h2>

        {/* Add item form */}
        <div className="add-item-form">
          <form onSubmit={handleAddItem}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Item name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="item-input"
              />
              <input
                type="number"
                min="1"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                className="quantity-input"
              />
              <button type="submit" className="add-btn">Add</button>
            </div>
          </form>
        </div>

        {/* Shopping list items */}
        <div className="shopping-list">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className={`shopping-item ${item.bought ? 'bought' : ''}`}>
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-quantity">Qty: {item.quantity}</p>
                </div>
                <div className="item-actions">
                  <button 
                    className={`bought-btn ${item.bought ? 'bought' : ''}`}
                    onClick={() => toggleBought(item.id)}
                  >
                    {item.bought ? 'Bought' : 'Bought'}
                  </button>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty">Your shopping list is empty.</p>
          )}
        </div>
      </div>
    </>
  );
}
