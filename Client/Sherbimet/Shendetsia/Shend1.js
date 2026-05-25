import React, { useState } from "react";
import axios from '../../client';
import './Shend1.css';

function Shend1() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [aprovoj, setAprovoj] = useState(false);
    const [successMessage, setSuccessMessage] = useState(""); // State to hold the success message

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3001/registerRequest', {
            selectedOption1,
            selectedOption2,
            selectedOption3,
            aprovoj
        })
        .then(response => {
            console.log('Success:', response.data);
            setSuccessMessage("Successfully registered the request."); // Set success message on successful submission
        })
        .catch(error => {
            console.error('Error:', error);
            setSuccessMessage("Failed to register the request."); // Set a different message on failure
        });
    };

    return (
        <div>
            <h3>Kërkesë për përzgjedhjen e mjekut familjar për persona tjerë</h3>
            <div className="Vem">
                <h3 className="vem">VËMENDJE</h3>
                <p className="para"> - Ju lutemi që të përzgjedhni QMF-në më të afërt me adresën e personit për të cilin po aplikoni. Adresa e cila do të merret për bazë është ajo që personi që po aplikoni e ka deklaruar në zyrat e Gjendjes Civile pranë komunës.</p>
            </div>
            <div className="App-form-container">
                <fieldset className="App-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label htmlFor="select1">Lloji i Kerkeses</label>
                            <select name="select1" id="select1" value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className="App-form-input">
                                <option value="" disabled>Aplikim per anetaret e familjes</option>
                                <option value="1">Prindi</option>
                                <option value="t">Te tjera</option>
                            </select>
                            <label htmlFor="select2">Institucioni shendetesor</label>
                            <select name="select2" id="select2" value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="1">Prindi</option>
                                <option value="t">Te tjera</option>
                            </select>
                            <label htmlFor="select3">Mjeku Familjar</label>
                            <select name="select3" id="select3" value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="1">Prindi</option>
                                <option value="t">Te tjera</option>
                            </select>
                            <div className="subject-options">
                                <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj} onChange={(e) => setAprovoj(e.target.checked)} className="App-form-input" />
                                <label htmlFor="aprovoj">Pjatohem</label>
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="App-form-button">Regjistro kerkesen</button>
                        </div>
                    </form>
                    {successMessage && <div className="success-message">{successMessage}</div>} {/* Display the success or error message */}
                </fieldset>
            </div>
        </div>
    );
}

export default Shend1;
