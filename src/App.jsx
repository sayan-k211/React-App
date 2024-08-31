import React from 'react';
// Importing necessary components from react-router-dom for routing functionality
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing the HomePage, Details, and Navmenu components
import HomePage from './HomePage';
import Details from './Details';
import Navmenu from './Navmenu';

// Main App component
function App() {
  return (
    // Wrapping the application in the Router to enable routing
    <Router>
      {/* Including the navigation menu component at the top */}
      <Navmenu />
      
      {/* Defining the routes for the application */}
      <Routes>
        {/* Route for the HomePage component */}
        <Route exact path="/" element={<HomePage />} />
        
        {/* Route for the Details component with a dynamic URL parameter */}
        <Route exact path="/entry/:Item" element={<Details />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
