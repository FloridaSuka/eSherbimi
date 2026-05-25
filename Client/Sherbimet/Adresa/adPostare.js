import React, { useState } from "react";
import axios from 'axios';
import './adPostare.css';

const AdPostare = () => {
    const [Komuna, setKomuna] = useState("");
    const [Vendbanimi, setVendbanimi] = useState("");
    const [Numri, setNumri] = useState("");
    const [Rruga, setRruga] = useState("");
    const [Kodi, setKodi] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/adpostare', {
                Komuna, Vendbanimi, Numri, Rruga, Kodi, selectedOption
            });
            alert('Data saved successfully');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data');
        }
    };

    return (
        <div className="Form-container">
            <h1>Deklarimi i adreses postare</h1>
            <fieldset className="Form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="Left-column">
                        <h4>Adresa postare e banimit</h4>
                        <label htmlFor="Komuna">Komuna:</label>
                        <input type="text" name="Komuna" id="Komuna" value={Komuna} onChange={(e) => setKomuna(e.target.value)} placeholder="Enter Komuna" required className="Form-input" />

                        <label htmlFor="Vendbanimi">Vendbanimi:</label>
                        <input type="text" name="Vendbanimi" id="Vendbanimi" value={Vendbanimi} onChange={(e) => setVendbanimi(e.target.value)} placeholder="Enter Vendbanimi" required className="Form-input" />

                        <label htmlFor="Rruga">Rruga:</label>
                        <input type="text" name="Rruga" id="Rruga" value={Rruga} onChange={(e) => setRruga(e.target.value)} placeholder="Enter Rruga" required className="Form-input"/>
                        
                        <label htmlFor="Numri">Numri i hyrjes:</label>
                        <input type="text" name="Numri" id="Numri" value={Numri} onChange={(e) => setNumri(e.target.value)} placeholder="Enter Numri i hyrjes" required className="Form-input" />
                        
                        <label htmlFor="Kodi">Kodi postar:</label>
                        <input type="text" name="Kodi" id="Kodi" value={Kodi} onChange={(e) => setKodi(e.target.value)} placeholder="Enter Kodi" required className="Form-input" />
                    </div>
                    <div className="Right-column">
                        <label htmlFor="select">Lloji i objektit:</label>
                        
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="Form-input">
                            <option value="1">Hyrje e vecante</option>
                            <option value="2">Objekt shumekatesh</option>
                        </select>
                    </div>
                    
                    <div className="Button-container">
                        <button type="submit" value="Submit" className="Form-button">Ruaj</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AdPostare;
