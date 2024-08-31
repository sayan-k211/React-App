import React from 'react';
// Importing global styles, including any specific styles for the HomePage
import './App.css';  

// Functional component for the HomePage
function HomePage() {
  return (
    // Main container for the homepage content
    <div className="homepage">
      {/* Main heading for the homepage */}
      <h1>Welcome to the SCP Foundation</h1>
      
      {/* Brief description or introduction text */}
      <p>Explore our collection of anomalies and containment procedures.</p>
    </div>
  );
}

// Exporting HomePage component as the default export
export default HomePage;
