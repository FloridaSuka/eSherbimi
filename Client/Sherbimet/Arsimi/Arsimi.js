import React, { useState } from 'react';
import './Arsimi.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const arsimi = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleLinkClick = (event, message) => {
        event.preventDefault();
        setAlertMessage(message);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="new-service-page">
            <div className="new-service-section">
                <h4 className="new-section-title">Arsimi</h4>
                <div className="new-options">
                    <input type="radio" id="newRadio1" name="newOptions" value="option1" />
                    <label htmlFor="newRadio1">Option 1</label>
                    <input type="radio" id="newRadio2" name="newOptions" value="option2" />
                    <label htmlFor="newRadio2">Option 2</label>
                    <input type="radio" id="newRadio3" name="newOptions" value="option3" />
                    <label htmlFor="newRadio3">Option 3</label>
                    <input type="radio" id="newRadio4" name="newOptions" value="option4" />
                    <label htmlFor="newRadio4">Option 4</label>
                </div>
                <div className="new-search-container">
                    <input type="text" placeholder="Search..." />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </div>

            <div className="new-service-cards-container">
                <div className="new-service-cards-wrapper">
                    <div className="new-service-card">
                        <div className="new-card-content">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="new-card-icon" />
                            <Link to="/Arsimi/projektet" style={{ color: '#333' }} className='linkcla'>Universiteti i Prishtines "Hasan Prishtina" - Te hyrat nga projektet</Link>
                            <span className="new-arrow">&#62;</span>
                        </div>
                    </div>
                    <div className="new-service-card">
                        <div className="new-card-content">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="new-card-icon" />
                            <Link to="/Arsimi/participimet" style={{ color: '#333' }} className='linkcla'>Universiteti i Prishtines "Hasan Prishtina" - Participimet</Link>
                            <span className="new-arrow">&#62;</span>
                        </div>
                    </div>
                </div>
            </div>
            {showAlert && (
                <div className="custom-alert">
                    <h5>Njoftim</h5>
                    <p>{alertMessage}</p>
                    <button onClick={handleCloseAlert}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Tatimet;