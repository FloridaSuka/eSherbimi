// src/client/Sherbimet/Prona/Projektet.js
import React, { useState } from "react";
import './projektet.css';
import axios from 'axios';

const Projektet = () => {
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/projektet', { amount, paymentMethod });
            console.log('Donation saved:', response.data);
            alert('Donation saved successfully');
        } catch (error) {
            console.error('Error saving donation:', error);
            alert('Error saving donation: ' + (error.response ? JSON.stringify(error.response.data) : error.message));
        }
    };

    return (
        <div className="projektet-form-container">
            <h2>Universiteti i Prishtinës "Hasan Prishtina" - Të hyrat nga projektet</h2>
            <fieldset className="projektet-form-wrapper">
                <label htmlFor="amount">Shuma e donacionit</label>
                <div className="form-elements">
                    <input
                        type="text"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="projektet-input"
                        placeholder="€ 100.00"
                    />
                    <label htmlFor="paymentMethod">Metoda e pagesës</label>
                    <select
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="projektet-input"
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    <button type="submit" onClick={handleSubmit} className="form-button">Paguaj</button>
                </div>
            </fieldset>
        </div>
    );
};

export default Projektet;
