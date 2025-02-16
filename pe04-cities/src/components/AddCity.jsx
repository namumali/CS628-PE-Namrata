import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddCity({ addCity }) {
  const [city, setCity] = useState({ name: '', country: '', population: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);
    navigate('/cities');
  };

  return (
    <div className="add-city">
      <h2>Add New City</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={city.name} onChange={handleChange} placeholder="City Name" required />
        <input type="text" name="country" value={city.country} onChange={handleChange} placeholder="Country" required />
        <input type="number" name="population" value={city.population} onChange={handleChange} placeholder="Population" required />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;