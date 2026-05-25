import React, { useState } from "react";
import './Kesco.css';
import axios from 'axios';

const Kesco = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/kesco-bills', {
                region: selectedOption,
                reference: ref
            });
            console.log('Data saved:', response.data);
            alert('Data saved successfully');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data');
        }
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!selectedOption || !ref) {
          setError('Both region and reference are required');
          return;
        }
        try {
          const response = await axios.post('http://localhost:3001/api/kesco-bills/search', {
            region: selectedOption,
            reference: ref
          });
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
        <div className="kesco-form-container">
            <h2>KESCO - Shiko dhe paguaj faturat e energjisë elektrike</h2>
            <fieldset className="kesco-form-wrapper">
                <label htmlFor="reference">Kërkoni sipas shifrës të konsumatorit që gjendet brenda faturës</label>
                <div className="form-elements">
                    <select name="region" id="region" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="inputtt">
                        <option value="">Zgjidhni një opsion</option>
                        <option value="Region1">Region1</option>
                        <option value="Region2">Region2</option>
                        <option value="Region3">Region3</option>
                    </select>
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="kesco-iput" placeholder="Shkruaj këtu" />
                    <button type="button" onClick={handleSearch} className="form-bton">Kërko</button>
                </div>
            </fieldset>
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

export default Kesco;
