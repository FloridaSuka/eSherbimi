import React, { useState } from "react";
import axios from 'axios';
import './Vula.css';

const Vula = () => {
    const [personalNumber, setPersonalNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/vula', {
                personalNumber,
                fullName,
                city,
                email
            });
            alert('Data saved successfully');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data');
        }
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete('http://localhost:3001/api/vula', { data: { personalNumber } });
            alert('Data deleted successfully');
        } catch (error) {
            console.error('Error deleting data:', error);
            alert('Error deleting data');
        }
    };

    return (
        <div className="form-container">
            <h1>Vula apostile dhe legalizuese ne MPJD</h1>
            <fieldset className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="column-left">
                        <h3>Te dhenat tuaja</h3>
                        <label htmlFor="fullName">Emri</label>
                        <input type="text" name="fullName"  value={fullName} onChange={(e) => setFullName(e.target.value)}  className="input"  />

                        <label htmlFor="city">Mbiemri</label>
                        <input type="text" name="city"  value={city} onChange={(e) => setCity(e.target.value)} className="input"  />

                        <label htmlFor="email">Email adresa</label>
                        <input type="email"  name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input"  />

                        <label htmlFor="personalNumber">Numri personal</label>
                        <input type="text" name="personalNumber" value={personalNumber} onChange={(e) => setPersonalNumber(e.target.value)} className="input"  />
                    </div>

                    <div className="button-container">
                        <button type="reset" value="reset" onClick={handleCancel} className="Form-button">Anulo</button>
                        <button type="submit" value="Submit" className="button">Rezervo</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default Vula;
