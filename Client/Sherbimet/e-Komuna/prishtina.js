// src/client/Sherbimet/Prishtina/Prishtina.js
import React, { useState } from "react";
import axios from "axios";
import './prishtina.css';

const Prishtina = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/prishtina/search', {
                searchTerm
            });
            if (response.data.found) {
                setResult(response.data.record);
                setMessage(null);
            } else {
                setResult(null);
                setMessage('The search term was not found and has been added to the database.');
            }
        } catch (error) {
            console.error('Error submitting search term:', error);
            setMessage('Error submitting search term');
            setResult(null);
        }
    };

    return (
        <div className="prishtina-form-container">
            <p>Regjistri i procedurave administrative për Komunën e Prizrenit është një vend i vetëm për
                të gjetur informacionin përkatës në lidhje me procedurat administrative të lëshuara nga
                autoritetet komunale për bizneset dhe qytetarët.</p>
            <form onSubmit={handleSubmit}>
                <fieldset className="prishtina-form-wrapper">
                    <label htmlFor="search">Kerko drejtorine: </label>
                    <div className="form-elements">
                        <input type="text" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="prishtina-input" placeholder="Shkruaj ketu..." />
                        <button type="submit" className="form-button">Kerko</button>
                    </div>
                </fieldset>
            </form>
            {result && (
                <div className="result">
                    <h3>Search Result:</h3>
                    <p>{result.searchTerm}</p>
                </div>
            )}
            {message && (
                <div className="message">
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default Prishtina;
