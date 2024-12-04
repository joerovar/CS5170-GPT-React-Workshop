import "./App.css";
import ParkingQueryForm from "./components/ParkingQueryForm";
import useImage from "./hooks/useImage";

function App() {
  const { image, imgError, imgIsLoading } = useImage("");
  return (
    <div id="root-container">
      {/* Main content container */}
      <div className="content-container">
        {imgIsLoading && <div className="spinner-border" />}
        {!imgIsLoading && image && <img src={image} alt="Generated content" />}
        {imgError && <div className="error">Failed to load image: {imgError}</div>}
        
        <h1>Excess Parking Tool</h1>
        <p>
          Curious on how the parking space in your neighborhood could be repurposed?
        </p>
        <p>
          Fill out the form below to get started.
        </p>
        {/* Left-aligned form */}
        <div className="form-container">
          <ParkingQueryForm />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
      <p>This tool is experimental.</p>
      <p>
        <strong>Data privacy statement:</strong> We do not share your data with third parties. Your information is used solely to improve your user experience.
      </p>
      <p>
        <strong>Assumptions:</strong>
      </p>
      <ul>
        <li>
          Sample sizes (and therefore realistic estimates of available parking spaces) vary significantly across neighborhoods.
        </li>
        <li>
          We assume a 1:2 ratio for housing units. This ratio might not account for larger family needs, leading to potential overestimation of the benefits.
        </li>
        <li>
          The model assumes that all parking spaces can be rented out, which might overestimate the potential benefits.
        </li>
        <li>
          We presume zoning regulations permit converting parking spaces into housing units, though this may not always be feasible.
        </li>
      </ul>
    </div>
    </div>
  );
}

export default App;