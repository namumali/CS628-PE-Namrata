import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });

  useEffect(() => {
    axios.get(`http://localhost:5001/api/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5001/api/recipes/${id}`, recipe);
    navigate("/");
  };

  return (
    <div className="edit-recipe-container">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={recipe.name} onChange={handleChange} required placeholder="Recipe Name" />
        <input name="ingredients" value={recipe.ingredients} onChange={handleChange} required placeholder="Ingredients (comma-separated)" />
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required placeholder="Instructions"></textarea>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
  
};

export default EditRecipe;
