import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "../../styles/pages/ManageRecipes.css";

export default function ManageRecipes() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Veg Fried Rice",
      time: "30 mins",
      ingredients: ["Rice", "Carrot", "Peas", "Soy Sauce"]
    },
    {
      id: 2,
      name: "Pasta Salad", 
      time: "20 mins",
      ingredients: ["Pasta", "Tomato", "Olive Oil", "Basil"]
    },
    {
      id: 3,
      name: "Omelette",
      time: "10 mins", 
      ingredients: ["Eggs", "Salt", "Butter"]
    },
    {
      id: 4,
      name: "Fruit Chat",
      time: "30 mins",
      ingredients: ["Banana", "Apple", "Peach"]
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    time: "",
    ingredients: ""
  });

  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (newRecipe.name && newRecipe.time && newRecipe.ingredients) {
      const recipe = {
        id: recipes.length + 1,
        name: newRecipe.name,
        time: newRecipe.time,
        ingredients: newRecipe.ingredients.split(",").map(ing => ing.trim())
      };
      setRecipes([...recipes, recipe]);
      setNewRecipe({ name: "", time: "", ingredients: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="manage-recipes-container">
        <div className="manage-header">
          <h2>Manage Recipes</h2>
          <p className="manage-subtitle">Add, edit, and manage recipe collection for users</p>
          <button 
            className="add-recipe-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            Add New Recipe
          </button>
        </div>

        {showAddForm && (
          <div className="add-recipe-form">
            <h3>Add New Recipe</h3>
            <form onSubmit={handleAddRecipe}>
              <div className="form-group">
                <label>Recipe Name:</label>
                <input
                  type="text"
                  value={newRecipe.name}
                  onChange={(e) => setNewRecipe({...newRecipe, name: e.target.value})}
                  placeholder="Enter recipe name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Cooking Time:</label>
                <input
                  type="text"
                  value={newRecipe.time}
                  onChange={(e) => setNewRecipe({...newRecipe, time: e.target.value})}
                  placeholder="e.g. 30 mins"
                  required
                />
              </div>
              <div className="form-group">
                <label>Ingredients (comma separated):</label>
                <textarea
                  value={newRecipe.ingredients}
                  onChange={(e) => setNewRecipe({...newRecipe, ingredients: e.target.value})}
                  placeholder="Rice, Carrot, Peas, Soy Sauce"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Save Recipe</button>
                <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="manage-recipe-card">
              <div className="recipe-content">
                <div className="recipe-header">
                  <h3>{recipe.name}</h3>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteRecipe(recipe.id)}
                  >
                    Delete
                  </button>
                </div>
                <p className="recipe-time">{recipe.time}</p>
                <div className="ingredients">
                  <strong>Ingredients:</strong>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}