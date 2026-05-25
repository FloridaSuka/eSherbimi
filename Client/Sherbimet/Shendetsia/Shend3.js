import React, { useState } from "react";
import './Shend3.css';
import axios from 'axios';

function Shend3() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [selectedOption4, setSelectedOption4] = useState("");
    const [aprovoj, setAprovoj] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            request_type: selectedOption1,
            health_institution: selectedOption2,
            request_reason: selectedOption3,
            family_doctor: selectedOption4,
            consent: aprovoj
        };

        try {
            const response = await axios.post('http://localhost:3001/api/electronic-passports', formData);
            console.log('Request submitted successfully:', response.data);
            alert('Request submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
            alert(`Error submitting data: ${error.message}`);
        }
    }

    async function handleDownloadCertificate() {
        try {
            const response = await axios.get('http://localhost:3001/api/electronic-passports/1/download', { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'ElectronicPassport.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading certificate:', error);
            alert('Error downloading certificate');
        }
    }

    return (
        <div>
            <div className="Vem">
                <h3 className="vem">Pasaporta Elektronike e Vaksinimit</h3>
            </div>
            <div className="App-form-container">
                <fieldset className="App-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label>Lloji i Kerkeses</label>
                            <select name="select1" value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className="App-form-input">
                                <option value="" disabled>Aplikim per </option>
                                <option value="Anetaret e familjes">Anetaret e familjes</option>
                                <option value="Indivdual">Indivdual</option>
                            </select>
                            <label>Institucioni shendetesor</label>
                            <select name="select2" value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="QKUK">QKUK</option>
                                <option value="Shtepia e shendetit">Shtepia e shendetit</option>
                            </select>
                            <label>Arsyeja e kerkeses</label>
                            <select name="select3" value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="Vizite jashte vendit">Vizite jashte vendit</option>
                                <option value="Pune">Pune</option>
                            </select>
                            <label>Mjeku Familjar</label>
                            <select name="select4" value={selectedOption4} onChange={(e) => setSelectedOption4(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="Filan Fiskteku">Filan Fiskteku</option>
                                <option value="Fistek Filani">Fistek Filani</option>
                            </select>
                            <div className="subject-options">
                                <input
                                    type="checkbox"
                                    name="aprovoj"
                                    id="aprovoj"
                                    checked={aprovoj}
                                    onChange={(e) => setAprovoj(e.target.checked)}
                                    className="App-form-input"
                                />
                                <label htmlFor="aprovoj">Pjatohem</label>
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" value="Submit" className="App-form-button">Regjistro kerkesen</button>
                            <button
                                type="button"
                                onClick={handleDownloadCertificate}
                                className="electronic-passport-button"
                            >
                                Shkarko certifikaten digjitale
                            </button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default Shend3;
