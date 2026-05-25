import React, { useState } from "react";
import axios from 'axios';
import './FaturaPer.css';

function FaturaPer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nrPersonal, setNrPersonal] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setData(null);

        try {
            // Check if the nrPersonal exists
            const checkResponse = await axios.get(`http://localhost:3001/api/fatura-per/${nrPersonal}`);
            if (checkResponse.data) {
                setData(checkResponse.data);
                alert('Person already exists in the database');
                return;
            }
        } catch (err) {
            if (err.response && err.response.status === 404) {
                // Person does not exist, proceed with creating a new entry
                try {
                    const response = await axios.post('http://localhost:3001/api/fatura-per', {
                        firstName,
                        lastName,
                        nrPersonal
                    });
                    setData(response.data);
                    alert('New entry created successfully');
                } catch (err) {
                    setError('Error submitting form');
                    console.error('Error submitting form:', err);
                }
            } else {
                setError('Error checking if person exists');
                console.error('Error checking if person exists:', err);
            }
        }
    };

    return (
        <div className="New-form-container">
            <h1>Fatura e tatimit të pronës për persona të tjerë</h1>
            <fieldset className="New-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="New-left-column">
                        <h4>Te dhenat e prindrit</h4>
                        <label htmlFor="firstname">First Name*</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                            required
                            className="New-form-input"
                        />

                        <label htmlFor="lastname">Last Name*</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                            required
                            className="New-form-input"
                        />

                        <label htmlFor="nrpersonal">NrPersonal*</label>
                        <input
                            type="text"
                            name="nrpersonal"
                            id="nrpersonal"
                            value={nrPersonal}
                            onChange={(e) => setNrPersonal(e.target.value)}
                            placeholder="Enter NrPersonal"
                            required
                            className="New-form-input"
                        />
                    </div>

                    <div className="New-button-container">
                        <button type="submit" value="Submit" className="New-form-button">Kerko</button>
                    </div>
                </form>
                {error && <p className="error-message">{error}</p>}
                {data && (
                    <div className="New-data-display">
                        <h2>Response Data:</h2>
                        <p><strong>First Name:</strong> {data.firstName}</p>
                        <p><strong>Last Name:</strong> {data.lastName}</p>
                        <p><strong>NrPersonal:</strong> {data.nrPersonal}</p>
                    </div>
                )}
            </fieldset>
        </div>
    );
}

export default FaturaPer;
