import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
