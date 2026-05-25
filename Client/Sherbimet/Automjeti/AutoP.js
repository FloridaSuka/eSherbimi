import React, { useState } from "react";
import './AutoP.css';
import axios from 'axios';

const AutoP = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [resume, setResume] = useState("");
    const [resu, setResu] = useState("");
    const [resum, setResum] = useState("");
    const [res, setRes] = useState("");
    const [re, setRe] = useState("");
    const [aprovoj, setAprovoj] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            personalNumber: resume,
            fullName: resu,
            city: resum,
            address: res,
            registrationType: selectedOption,
            expirationDate: re,
            approved: aprovoj
        };

        try {
            const response = await axios.post('http://localhost:3001/api/auto-ps', formData);
            const { fileName } = response.data;

            // Download PDF
            const link = document.createElement('a');
            link.href = `http://localhost:3001/api/download-pdf/${fileName}`;
            link.download = fileName;
            link.click();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="auto-p-form-container">
            <h1>Kërkesë për targa me porosi nga pronari individual</h1>
            <fieldset className="auto-p-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="auto-p-column-left">
                        <h3>Te dhenat personale</h3>
                        <label htmlFor="personalNumber">Numri personal:</label>
                        <input type="text" name="personalNumber" value={resume} onChange={(e) => setResume(e.target.value)} className="auto-p-input" />

                        <label htmlFor="fullName">Emri dhe mbiemri:</label>
                        <input type="text" name="fullName" value={resu} onChange={(e) => setResu(e.target.value)} className="auto-p-input" />

                        <label htmlFor="city">Qyteti:</label>
                        <input type="text" name="city" value={resum} onChange={(e) => setResum(e.target.value)} className="auto-p-input" />

                        <label htmlFor="address">Adresa:</label>
                        <input type="text" name="address" value={res} onChange={(e) => setRes(e.target.value)} className="auto-p-input" />
                    </div>

                    <div className="auto-p-column-right">
                        <label htmlFor="registrationType">Shkruani targat që do të rezervoni:</label>
                        <input type="text" name="registrationType" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-p-input" />
                        <select name="registrationType" id="auto-b-registrationType" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="auto-b-input">
                            <option value="">GT</option>
                            <option value="">HA</option>
                            <option value="">HB</option>
                            <option value="">HC</option>
                            <option value="">HD</option>
                            <option value="">HD</option>
                            <option value="">HD</option>
                        </select>

                        <label htmlFor="expirationDate">Data e skadimit të vlefshmërisë së porosisë:</label>
                        <input type="text" name="expirationDate" value={re} onChange={(e) => setRe(e.target.value)} className="auto-p-input" placeholder="18.07.2024" />
                    </div>

                    <p className="nje">Pagesa për targën e rezervuar duhet të realizohet në momentin kur bëhet pranimi i targave në qendrën për regjistrimin e automjetit.</p>
                
                    <h3>Çmimorja sipas kategorive të tabelave</h3>
                    <div className="auto-p-prices-container">
                        <table className="auto-p-prices-table">
                            <thead>
                                <tr>
                                    <th>Kategoria e Targave</th>
                                    <th>Çmimi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Targat me porosi me numra të ndryshëm dhe kombinimi shkronjave</td>
                                    <td>50.00€</td>
                                </tr>
                                <tr>
                                    <td>Targat me porosi me numra fiks dhe kombinimi i shkronjave si në vijim: 200, 300, 400, 500, 600, 700, 800, 900 për të githa regjionet</td>
                                    <td>50.00€</td>
                                </tr>
                                <tr>
                                    <td>Targat me porosi me numra të njëjtë dhe kombinimi i shkronjave</td>
                                    <td>100.00€</td>
                                </tr>
                                <tr>
                                    <td>Targat me porosi me numra të njëjtë si në vijim 01-111, 02-222, 03-333, 04-444, 05-555, 06-666, 07-777 dhe kombinimi i shkronjave</td>
                                    <td>200.00€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="auto-p-app">
                        <p className="auto-p-note">Konfirmoj se kam lexuar dhe kuptuar tabelën e çmime e sipas kategorive të targave. Pajtohem që shuma totale e realizimit të këtij shërbimi të bashkangjitet në faturën e regjistrimit të veturës, riregjistrimit, vazhdimit të regjistrimit apo ndërrimit të targave.</p>
                        <input type="checkbox" name="apro" id="apro" checked={aprovoj} onChange={() => setAprovoj(!aprovoj)} className="auto-p-input" />
                    </div>
                    
                    <div className="auto-p-button-container">
                        <button type="submit" value="Submit" className="auto-p-button">Shkarko urdherpagesen</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AutoP;
