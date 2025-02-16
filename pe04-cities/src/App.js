import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CityList from './components/CityList';
import CityDetails from './components/CityDetails';
import AddCity from './components/AddCity';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'New York', country: 'USA', population: '8,419,600' },
    { id: 2, name: 'Los Angeles', country: 'USA', population: '3,980,400' },
    { id: 3, name: 'Chicago', country: 'USA', population: '2,716,000' },
  ]);

  const addCity = (city) => {
    setCities([...cities, { id: cities.length + 1, ...city }]);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="app-title">City Explorer</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/cities" />} />
          <Route path="/cities" element={<CityList cities={cities} />} />
          <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
          <Route path="/add-city" element={<AddCity addCity={addCity} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;