import React, { useState } from "react";
import './Policia2.css';
import axios from 'axios';

const Policia2 = () => {
  const [ref, setRef] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/policia2/search', { searchTerm: ref });
      if (response.data.found) {
        setSearchResult(response.data.record);
        setError(null);
      } else {
        setSearchResult(null);
        setError('Record not found');
      }
    } catch (error) {
      console.error('Error searching data:', error);
      setError('Error searching data');
    }
  };

  return (
    <div className="Pol-p-form-container">
      <h2>Kërkimi i gjobave individuale</h2>
      <form onSubmit={handleSearch} className="Pol-p-form-wrapper">
        <label htmlFor="reference">Referenca</label>
        <input 
          type="text" 
          name="reference" 
          value={ref} 
          onChange={(e) => setRef(e.target.value)} 
          className="Pol-p-input" 
          placeholder="Shkruaj këtu" 
        />
        <div className="ButtonP">
          <button type="submit" value="Submit" className="Form-button">Kërko</button>
        </div>
      </form>
      {searchResult && (
        <div className="search-result">
          <h3>Search Result:</h3>
          <p>{JSON.stringify(searchResult)}</p>
        </div>
      )}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Policia2;
