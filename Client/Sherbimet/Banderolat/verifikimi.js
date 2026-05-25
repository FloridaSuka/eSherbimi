import React, { useState } from "react";
import axios from 'axios';
import './verifikimi.css';

const Verifikimi = () => {
  const [ref, setRef] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);

    try {
      const response = await axios.get(`http://localhost:3001/api/verifikimi/${ref}`);
      setData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Banderola not found");
      } else {
        setError("Error fetching banderola");
      }
    }
  };

  return (
    <div className="verifikimi-form-container">
      <h2>Verifiko Banderolat nga Agjencia e Kosovës për Produkte dhe Pajisje Medicinale</h2>
      <fieldset className="verifikimi-form-wrapper">
        <label htmlFor="reference">Kerko sipas numrit serik te banderoles</label>
        <div className="form-elements">
          <input
            type="text"
            name="reference"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            className="verifikimi-input"
            placeholder="Shkruaj ketu..."
          />
          <button type="submit" onClick={handleSubmit} className="form-button">Kerko</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {data && (
          <div className="verifikimi-data">
            <p><strong>Reference:</strong> {data.ref}</p>
            <p><strong>Selected Option:</strong> {data.selectedOption}</p>
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default Verifikimi;

