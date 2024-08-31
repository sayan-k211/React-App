// Importing the useParams hook from react-router-dom to access URL parameters
import { useParams } from 'react-router-dom';

// Importing the data entries from the data.js file
import { entrys } from './data.js';

// Importing the CSS file specific to the Details component
import './Details.css';

// Functional component for displaying detailed information about an SCP entry
function Details() {
  // Extracting the 'Item' parameter from the URL using useParams
  const { Item } = useParams();

  // Finding the specific SCP entry that matches the 'Item' parameter
  const entry = entrys.find(p => p.Item === Item);

  // If the entry is not found, display an error message
  if (!entry) {
    return <div className="error-message">SCP entry not found.</div>;
  }

  // Rendering the detailed information of the found SCP entry
  return (
    <main>
      <article>
        <header>
          {/* Displaying the SCP item name and class */}
          <h1>{entry.Item}</h1>
          <h2> Class: {entry.Class} </h2>
        </header>
        
        <section className="procedure">
          {/* Section for special containment procedures */}
          <h3>Special Containment Procedures</h3>
          <p>{entry.specialContainmentProcedures}</p>
        </section>
        
        <figure>
          {/* Displaying the image associated with the SCP entry */}
          <img src={entry.image} alt={entry.Item} />
        </figure>
        
        <section className="body-text">
          {/* Section for the description of the SCP item */}
          <h3>Description</h3>
          <p>{entry.description}</p>
        </section>
        
        <section className="body-text">
          {/* Section for references related to the SCP item */}
          <h3>References</h3>
          <p>{entry.references}</p>
        </section>
      
      </article>
    </main>
  );
}

// Exporting the Details component as the default export
export default Details;
