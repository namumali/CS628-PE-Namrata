import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import '../App.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [recipe, setRecipe] = useState(null);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/recipes/${id}`);
      navigate("/"); // Redirect to the homepage after deletion
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5001/api/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details-container">
      <h2>{recipe.name}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <div className="button-group">
        <Link to={`/edit/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded">✏️ Edit</Link>
        <button className="delete" onClick={handleDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
