# Input-Process-Output Analysis

## Input
The application takes user inputs in two ways:
1. Predefined City Data – The app starts with a predefined list of cities stored in the `useState` hook in `App.js`.
2. User Input for New Cities – Users can add a new city via the `AddCity` form, which includes fields for city name, country, and population.

## Process
1. Routing and Navigation – React Router manages page navigation between city lists, city details, and the add-city form.
2. State Management – `useState` in `App.js` maintains the list of cities and updates it dynamically.
3. Event Handling – Functions like `handleChange`, `handleSubmit`, and `addCity` handle user interactions, update the state, and navigate between pages.

## Output
1. City List Display – Users see all available cities with clickable links.
2. City Details – Clicking a city displays its details.
3. Updated City List – After adding a new city, the updated list appears dynamically without a page refresh.

