import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/recipes")
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="recipe-list-container">
      <h1>Recipe Finder</h1>
      <Link to="/add" className="add-recipe-link">➕ Add New Recipe</Link>
      {recipes.map(recipe => (
        <div key={recipe._id} className="recipe-item">
          <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
        </div>
      ))}
    </div>
  );
  
};

export default RecipeList;
