// Importing the React library which is necessary for building the UI components
import React from 'react';

// Importing the ReactDOM library which is used to interact with the DOM, specifically to render React components
import ReactDOM from 'react-dom/client';

// Importing the main App component, which is the root component of your React application
import App from './App.jsx';

// Importing the global CSS file for styling the application
import './index.css';

// Rendering the App component into the DOM, targeting the 'root' div
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the App component in React.StrictMode to help identify potential problems in the application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
