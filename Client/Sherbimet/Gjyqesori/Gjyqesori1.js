import React, { useState } from "react";
import './Gjyqesori1.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import photo4 from '../../../assets/photo4.png'; 

const Gjyqesori1 = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [ref, setRef] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption, ref);
    };

    const handleReset = () => {
        setSelectedOption("");
        setRef("");
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
    };

        return (
            <div className="kesco-form-container">
                <img src={photo4} alt="Shifra e konsumatorit" id="imgg"  />
                <h2>Certifikata mbi dënimet penale</h2>
                <fieldset className="kesco-form-wrapper">
                    <label htmlFor="reference">Zgjedhni arsyen e nxjerrjes së certifikatës:</label>
                    <div className="form-elements">
                        <select name="region" id="region" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="input">
                            <option value="">Zgjidhni një opsion</option>
                            <option value="Region1">Region1</option>
                            <option value="Region2">Region2</option>
                            <option value="Region3">Region3</option>
                        </select>
                        
                        <button type="submit" onClick={handleSubmit} className="form-button">Vazhdo</button>
                    </div>
                    <div className="vem">
                        <h4>Vëmendje</h4>
                        <div className="komunali-card-content">
                            <p style={{ color: '#333' }} className='linkla'>Në rast se keni ndonjë pyetje apo paqartësi rreth përmbajtjes së certifikatës, ju lutem paraqituni në gjykatën më të afërt apo dërgoni pyetjet tuaja në emailin <a href="sqepk.support@gjyqesori-rks.org" style={{ color: 'blue' }}>sqepk.support@gjyqesori-rks.org.</a>
                            Departamenti i Evidencës Qendrore Penale do t’i shqyrtojë pyetjet tuaja dhe do të ju përgjigjet brenda një kohe të shkurtër.</p>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    };
export default Gjyqesori1;
