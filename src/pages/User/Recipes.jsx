import Navbar from "../../components/Navbar";
import "../../styles/pages/Recipes.css";

export default function Recipes() {
  const recipes = [
    {
      id: 1,
      name: "Veg Fried Rice",
      time: "30 mins",
      matched: 4,
      ingredients: ["Rice", "Carrot", "Peas", "Soy Sauce"]
    },
    {
      id: 2,
      name: "Pasta Salad", 
      time: "20 mins",
      matched: 4,
      ingredients: ["Pasta", "Tomato", "Olive Oil", "Basil"]
    },
    {
      id: 3,
      name: "Omelette",
      time: "10 mins", 
      matched: 3,
      ingredients: ["Eggs", "Salt", "Butter"]
    },
    {
      id: 4,
      name: "Fruit Chat",
      time: "30 mins",
      matched: 3, 
      ingredients: ["Banana", "Apple", "Peach"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="recipes-container">
        <div className="recipes-header">
          <h2>Recipes</h2>
          <p className="recipes-subtitle">We rank recipes by how many ingredients you already have</p>
        </div>
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-info">
                <div className="recipe-header">
                  <h3>{recipe.name}</h3>
                  <span className="matched-count">/ {recipe.matched} matched</span>
                </div>
                <p className="recipe-time">{recipe.time}</p>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}