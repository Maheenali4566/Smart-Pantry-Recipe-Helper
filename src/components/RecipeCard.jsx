import React from "react";
import "../styles/components/RecipeCard.css";

export default function RecipeCard({ title, description, image }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
