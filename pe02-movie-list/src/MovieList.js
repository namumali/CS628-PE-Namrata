// src/MovieList.js
import React, { useState } from 'react'; // Import React and useState hook
import './App.css'; 

// MovieList functional component
const MovieList = () => {
  // State to hold the selected genre for filtering
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  // Array of movie objects with title, genre, and release year
  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'Gladiator', genre: 'Action', releaseYear: 2000 },
    { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
    { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
    { title: 'The Lion King', genre: 'Animation', releaseYear: 1994 },
    { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
    { title: 'La La Land', genre: 'Musical', releaseYear: 2016 },
  ];

  // Get the unique genres for the dropdown
  // We use a Set to filter out duplicates and add "All Genres"
  const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  // Filter movies based on the selected genre
  const filteredMovies = selectedGenre === 'All Genres'
    ? movies // If 'All Genres' is selected, show all movies
    : movies.filter(movie => movie.genre === selectedGenre); // Filter by selected genre

  // Handle the genre selection change
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value); // Update the selected genre
  };

  // Handle when a movie title is clicked
  const handleMovieClick = (movieTitle) => {
    alert(`You clicked on ${movieTitle}`); // Show an alert with the movie title
  };

  return (
    <div>
      <h1>Movie List</h1>

      {/* Dropdown to select genre */}
      <select onChange={handleGenreChange} value={selectedGenre}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Render the list of filtered movies */}
      <div className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)} // Trigger movie click event
          >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
