import React from 'react';
import { Link } from 'react-router-dom';


function CityList({ cities }) {
  return (
    <div className="city-list">
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
      <button className="add-city-button">
        <Link to="/add-city">Add New City</Link>
      </button>
    </div>
  );
}

export default CityList;