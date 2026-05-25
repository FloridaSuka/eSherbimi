// donacioni.js
import React, { useState } from "react";
import './donacioni.css';
import axios from 'axios';

const Donacioni = () => {
    const [ref, setRef] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/donacioni', { amount: ref });
            console.log('Donation saved:', response.data);
            alert('Donation saved successfully');
        } catch (error) {
            console.error('Error saving donation:', error);
            alert('Error saving donation');
        }
    };

    return (
        <div className="donacioni-form-container">
            <h2>Donacion permes pageses elektronike me banka komerciale</h2>
            <fieldset className="donacioni-form-wrapper">
                <label htmlFor="reference">Shuma e donacionit</label>
                <div className="form-elements">
                    <input type="text" name="reference" value={ref} onChange={(e) => setRef(e.target.value)} className="donacioni-input" placeholder="Shkruaj këtu" />
                    <button type="submit" onClick={handleSubmit} className="form-button">Dhuro</button>
                </div>
                <div className="attention-section">
                    <h5>Shënim:</h5>
                    <p>transaksioni do te jete pa asnje kosto per ju</p>
                </div>
            </fieldset>
        </div>
    );
};

export default Donacioni;
