import React, { useState } from "react";
import axios from 'axios';
import './dokElektronike.css';

const DokElektronike = () => {
  const [ref, setRef] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);

    try {
      const response = await axios.get(`http://localhost:3001/api/dokElektronike/${ref}`);
      setData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Number not match");
      } else {
        setError("Error fetching banderola");
      }
    }
  };

  return (
    <div className="dokElektronike-form-container">
      <h2>Verifikimi i dokumenteve elektronike</h2>
      <fieldset className="dokElektronike-form-wrapper">
        <label htmlFor="reference">Numri serik</label>
        <div className="form-elements">
          <input 
            type="text" 
            name="reference" 
            value={ref} 
            onChange={(e) => setRef(e.target.value)} 
            className="dokElektronike-input" 
            placeholder="Shkruaj" 
          />
          <button type="submit" onClick={handleSubmit} className="form-button">Verifiko</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {data && (
          <div className="dokElektronike-data">
            <p><strong>Reference:</strong> {data.ref}</p>
            <p><strong>Selected Option:</strong> {data.selectedOption}</p>
          </div>
        )}
      </fieldset>
    </div>
  );
};

export default DokElektronike;

