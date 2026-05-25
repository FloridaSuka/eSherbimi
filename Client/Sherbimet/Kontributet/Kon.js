// src/client/Sherbimet/Prona/Kon.js
import React, { useState } from "react";
import './Kon.css';
import photo2 from '../../../assets/photo2.png';
import axios from 'axios';

const Kon = () => {
    const [au, setAu] = useState("");
    const [approve, setApprove] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/kon', { au, approve });
            console.log('Data saved:', response.data);
            alert('Data saved successfully');
            downloadData(response.data.id); // Pass the ID to download data
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data');
        }
    };

    const downloadData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/kon/${id}`);
            if (response.status === 200) {
                const konData = response.data;
                const blob = new Blob([JSON.stringify(konData, null, 2)], { type: 'application/json' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `kon-data-${id}.json`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Error fetching data:', response.status, response.statusText);
                alert('Error fetching data');
            }
        } catch (error) {
            console.error('Error downloading data:', error);
            alert('Error downloading data');
        }
    };

    return (
        <div className="kon-form-container">
            <img src={photo2} alt="Shifra e konsumatorit" className="kon-image"  />
            <h2>Pasqyra e kursimeve pensionale</h2>
            <fieldset className="kon-form-wrapper">
                <p className="kon-paragraph">Përmes kësaj faqeje mund ta shkarkoni pasqyrën e kursimeve pensionale (nëse jeni kontribues në Trust).
                    Pasqyra e shkarkuar nga eKosova është njëlloj sikurse pasqyra e cila merret tek zyrat e Trustit, dhe mund të përdoret për qëllime të ndryshme (psh. aplikim për vizë).
                    Palët e treta mund ta bëjnë verifikimi e pasqyrës duke skanuar kodin digjital (QR code) i cili gjindet në këndin e epërm të djathtë të faqes.</p>
            <div className="columee-left">
                <label htmlFor="au">Periudha e raportimit:</label>
                <div className="kon-options">
                    <input type="radio" name="au" value="viti" id="viti" checked={au === "viti"} onChange={(e) => setAu(e.target.value)} className="kon-form-input" />
                    <label htmlFor="viti">Viti i fundit</label>
                    
                    <input type="radio" name="au" value="fillim" id="fillim" checked={au === "fillim"} onChange={(e) => setAu(e.target.value)} className="kon-form-input" />
                    <label htmlFor="fillim">Nga fillimi</label>
                </div>
            </div>

                <div className="kon-checkbox-app">
                    <p className="kon-checkbox-note">Autorizoj Fondin e Kursimeve Pensionale të Kosovës që të përdorë numrin personal, numrin e telefonit dhe emailin tim për ngritje të cilësisë së shërbimit për kontribuuesit.</p>
                    <input type="checkbox" name="approve" id="approve" checked={approve} onChange={() => setApprove(!approve)} className="kon-checkbox-input" />
                </div>
                <button type="submit" onClick={handleSubmit} className="kon-button">Shkarko</button>
            </fieldset>
        </div>
    );
};

export default Kon;
