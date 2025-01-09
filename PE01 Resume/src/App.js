// Importing the main CSS file for global styling
import './App.css';

// Importing the Resume component
import Resume from './Resume';

// Main App component
function App() {
  return (
    // Root container for the app, styled with the "App" CSS class
    <div className="App">
      {/* Rendering the Resume component */}
      <Resume />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
