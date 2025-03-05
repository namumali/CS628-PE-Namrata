import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/recipes", recipe);
    navigate("/");
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Recipe Name" onChange={handleChange} required />
        <input name="ingredients" placeholder="Ingredients (comma-separated)" onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required></textarea>
        <button type="submit">➕ Add Recipe</button>
      </form>
    </div>
  );
  
  
};

export default AddRecipe;
