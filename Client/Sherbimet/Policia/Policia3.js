import React, { useState } from "react";
import './Policia3.css';
import axios from 'axios';

const Policia3 = () => {
    const [personalNumber, setPersonalNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [station, setStation] = useState("");
    const [reason, setReason] = useState("");
    const [dek, setDek] = useState("");
    const [alertMessage, setAlertMessage] = useState(null); // State for alert message

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            personalNumber,
            fullName,
            city,
            phone,
            email,
            selectedOption,
            station,
            reason,
            dek
        };
        
        try {
            const response = await axios.post('http://localhost:3001/api/policia3', formData);
            if (response.data.message) {
                setAlertMessage(response.data.message); // Set the alert message
                // Clear the form fields
                setPersonalNumber("");
                setFullName("");
                setCity("");
                setPhone("");
                setEmail("");
                setSelectedOption("");
                setStation("");
                setReason("");
                setDek("");
            } else {
                setAlertMessage('Error saving data');
            }
        } catch (error) {
            console.error('Error saving data:', error);
            setAlertMessage('Error saving data');
        }
    };

    return (
        <div className="form-container">
            <h1>Vërtetimi i të kaluarës kriminale</h1>
            <fieldset className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="column-left">
                        <label htmlFor="personalNumber">Numri personal:</label>
                        <input type="text" name="personalNumber" value={personalNumber} onChange={(e) => setPersonalNumber(e.target.value)} className="input"  />

                        <label htmlFor="fullName">Emri dhe mbiemri:</label>
                        <input type="text" name="fullName"  value={fullName} onChange={(e) => setFullName(e.target.value)}  className="input"  />

                        <label htmlFor="city">Komuna:</label>
                        <input type="text" name="city"  value={city} onChange={(e) => setCity(e.target.value)} className="input"  />

                        <label htmlFor="phone">Numri i telefonit:</label>
                        <input 
                            type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" />

                        <label htmlFor="email">Email:</label>
                        <input type="email"  name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input"  />
                    </div>

                    <div className="column-right">
                        <div className="select-container">
                            <label htmlFor="rez">Regjioni:</label>
                            <select name="rez" id="rez" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="input">
                                <option value="">Zgjidhni një opsion</option>
                                <option value="Region1">Region1</option>
                                <option value="Region2">Region2</option>
                                <option value="Region3">Region3</option>
                            </select>

                            <label htmlFor="station">Stacioni:</label>
                            <select name="station" id="station" value={station} onChange={(e) => setStation(e.target.value)} className="input">
                                <option value="">Zgjidhni një opsion</option>
                                <option value="Station1">Station1</option>
                                <option value="Station2">Station2</option>
                                <option value="Station3">Station3</option>
                            </select>

                            <label htmlFor="reason">Arsyeja:</label>
                            <select name="reason" id="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="input">
                                <option value="">Zgjidhni një opsion</option>
                                <option value="Reason1">Reason1</option>
                                <option value="Reason2">Reason2</option>
                                <option value="Reason3">Reason3</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="deklarata">Deklarata</label>
                    <input type="text" name="deklarata" value={dek} onChange={(e) => setDek(e.target.value)} className="input" placeholder="Shkruaj këtu" />

                    <div className="button-container">
                        <button type="submit" value="Submit" className="button">Dergo Kërkesën</button>
                    </div>
                </form>
            </fieldset>
            {alertMessage && (
                <div className="alert">
                    <p>{alertMessage}</p>
                </div>
            )}
        </div>
    );
};

export default Policia3;
