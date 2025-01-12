// src/App.js
import React from 'react';
import MovieList from './MovieList'; // Import the MovieList component
import './App.css'; 

// The App component that holds the main layout of the application
function App() {
  return (
    <div>
      <h1>Welcome to the Movie App</h1>
      {/* Include the MovieList component */}
      <MovieList />
    </div>
  );
}

export default App;
