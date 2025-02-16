import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function CityDetails({ cities }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const city = cities.find((c) => c.id === Number(id));

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div className="city-details">
      <h2>City Details</h2>
      <p>Name: {city.name}</p>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <button onClick={() => navigate('/cities')}>Go Back</button>
    </div>
  );
}

export default CityDetails;