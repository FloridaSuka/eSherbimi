import React, { useState } from 'react';
import './Tatimet.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const Tatimet = () => {
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
                <h4 className="new-section-title">Tatimet</h4>
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
                            <Link to="/Fatura" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Nuk është identifikuar asnjë pronë sipas numrit tuaj personal. Nëse numri juaj personal është i saktë, ju lusim të drejtoheni tek Tatimi në Pronë për verifikim të pronës")}>Fatura e tatimit te prones individuale</Link>
                            <span className="new-arrow">&#62;</span>
                        </div>
                    </div>
                    <div className="new-service-card">
                        <div className="new-card-content">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="new-card-icon" />
                            <Link to="/Tatimet/FaturaPer" style={{ color: '#333' }} className='linkcla'>Fatura e tatimit te prones per persona te tjere</Link>
                            <span className="new-arrow">&#62;</span>
                        </div>
                    </div>
                    <div className="new-service-card">
                        <div className="new-card-content">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="new-card-icon" />
                            <Link to="/Fatura" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Njoftim I/e nderuar,  Sipas Agjencisë për Regjistrimin e Bizneseve të Kosovës (ARBK), nuk është identifikuar asnjë biznes i regjistruar sipas numrit tuaj personal. Duke ditur që ky shërbim mundëson shkarkimin dhe realizimin e pagesave të faturave të tatimit në pronë për biznese, ju lutemi të siguroheni që posedoni biznese aktive të regjistruara në ARBK.")}>Fatura e tatimit te prones se biznesite</Link>
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

