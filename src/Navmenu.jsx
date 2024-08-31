// Importing necessary modules from react-router-dom and React
import { Link } from "react-router-dom";
import { entrys } from "./data.js";
import React, { useState } from "react";

// Functional component for the navigation menu
function Navmenu() {
  // Using useState hook to manage the state of the menu (open or closed)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Site logo or title */}
      <label className="site-logo">SCP Foundation</label>

      {/* Checkbox to toggle the menu's open/close state */}
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      
      {/* Label for the menu toggle button (hamburger icon) */}
      <label className="menu-toggle-label" htmlFor="menu-toggle">
        &#9776; {/* HTML entity for the hamburger icon */}
      </label>
      
      {/* Navigation links */}
      <ul>
        <li>
          {/* Link to the homepage */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        {/* Dynamically generating navigation links for each SCP entry */}
        {entrys.map((entry) => (
          <li key={entry.Item}>
            <Link to={`/entry/${entry.Item}`} onClick={() => setMenuOpen(false)}>
              {entry.Item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Exporting the Navmenu component as the default export
export default Navmenu;
