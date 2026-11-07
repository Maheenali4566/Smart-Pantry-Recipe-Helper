import React from "react";
import "../styles/components/ItemCard.css";

export default function ItemCard({ name, quantity, image }) {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <div className="item-details">
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}
