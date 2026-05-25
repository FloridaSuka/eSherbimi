import React, { useState } from "react";
import axios from 'axios';
import './Deklarimi.css';

const Deklarimi = () => {
    const [subjects, setSubjects] = useState({
        antarsim: false,
        canetaresimin: false,
    });
    const [selectedOption, setSelectedOption] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            antarsim: subjects.antarsim,
            canetaresimin: subjects.canetaresimin,
            selectedOption
        };

        try {
            const response = await axios.post('http://localhost:3001/api/deklarimi', formData);
            alert('Data saved successfully');
            console.log('Data saved:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data');
        }
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    return (
        <div className="form-container">
            <h1>Deklarimi per anetaresim ne sindikate</h1>
            <fieldset className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="select">Sindikata:</label>
                    <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-input">
                        <option value="" disabled>Zgjedhni nje opsion</option>
                        <option value="1">FSSHK</option>
                        <option value="2">SBASHK</option>
                        <option value="3">SHSKPMM</option>
                        <option value="4">SHSPATK</option>
                        <option value="5">SHSPKA</option>
                    </select>

                    <label htmlFor="auto">Deklarimi:</label>
                    <div className="column-right">
                        <div className="registration-options">
                            <input type="checkbox" name="registration" id="antarsim" checked={subjects.antarsim} onChange={() => handleSubjectChange("antarsim")} className="form-input" />
                            <label htmlFor="antarsim">Konfirmoj anetaresimin ne sindikate</label>

                            <input type="checkbox" name="registration" id="canetaresimin" checked={subjects.canetaresimin} onChange={() => handleSubjectChange("canetaresimin")} className="form-input" />
                            <label htmlFor="canetaresimin">Konfirmoj c'anetaresimin nga sindikata</label>
                        </div>
                    </div>
                    <div className="Button-container">
                        <button type="submit" value="Submit" className="Form-button">Konfirmo</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default Deklarimi;
