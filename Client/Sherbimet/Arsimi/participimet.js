import React, { useState } from "react";
import axios from "axios";
import './projektet.css';

const Participimet = () => {
    const [ref, setRef] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!ref) {
            alert("Please fill in the donation amount");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/api/participations', {
                donationAmount: ref
            });
            console.log('Participation submitted successfully:', response.data);
            // Reset form fields
            setRef("");
        } catch (error) {
            console.error('Error submitting participation:', error);
            alert('Error submitting participation');
        }
    };

    return (
        <div className="projektet-form-container">
            <h2>Universiteti i Prishtinës "Hasan Prishtina" - Participimet</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className="projektet-form-wrapper">
                    <label htmlFor="reference">Shuma e donacionit</label>
                    <div className="form-elements">
                        <input
                            type="text"
                            name="reference"
                            value={ref}
                            onChange={(e) => setRef(e.target.value)}
                            className="projektet-input"
                            placeholder="€ 100.00"
                        />
                    </div>
                </fieldset>
                <button type="submit" className="form-button">Paguaj</button>
            </form>
        </div>
    );
};

export default Participimet;
