import React, { useState } from 'react';
import './GjendjaCivile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const GjendjaCivile = () => {
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
      <div className="custom-service-page">
        <div className="custom-service-section">
          <h4 className="custom-section-title">Gjendja Civile</h4>
          <div className="custom-options">
            <input type="radio" id="customRadio1" name="customOptions" value="option1" />
            <label htmlFor="customRadio1">Option 1</label>
            <input type="radio" id="customRadio2" name="customOptions" value="option2" />
            <label htmlFor="customRadio2">Option 2</label>
            <input type="radio" id="customRadio3" name="customOptions" value="option3" />
            <label htmlFor="customRadio3">Option 3</label>
            <input type="radio" id="customRadio4" name="customOptions" value="option4" />
            <label htmlFor="customRadio4">Option 4</label>
          </div>
          <div className="custom-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="custom-service-cards-container">
          <div className="custom-service-cards-wrapper">
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/Certi" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Për shkarkimin e këtijë dokumenti duhet që paraprakisht të keni verifikuar të dhënat në zyrat e gjendjes civile pranë komunës tuaj")}>Shkarko "Certifikaten e lindje"</Link>
                <span className="custom-arrow">&#62;</span>
              </div>
            </div>
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/GjendjaCivile/Ekstrakti" style={{ color: '#333' }} className='linkcla'>Shkarko "Ekstraktin"</Link>
                <span className="custom-arrow">&#62;</span>
              </div>
            </div>
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/Certi" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Për shkarkimin e këtijë dokumenti duhet që paraprakisht të keni verifikuar të dhënat në zyrat e gjendjes civile pranë komunës tuaj")}>Shkarko "Certifikaten e marteses"</Link>
                <span className="custom-arrow">&#62;</span>
              </div>
            </div>
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/GjendjaCivile/CertiFam" style={{ color: '#333' }} className='linkcla' >Shkarko "Certifikaten e lindje" per anetar familje</Link>
                <span className="custom-arrow">&#62;</span>
              </div>
            </div>
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/GjendjaCivile/EkstraFam" style={{ color: '#333' }} className='linkcla' >Shkarko "Ekstraktin" per anetar familje</Link>
                <span className="custom-arrow">&#62;</span>
              </div>
            </div>
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/GjendjaCivile/CertiMa" style={{ color: '#333' }} className='linkcla' >Shkarko "Certifikatën e martesës" për anëtar të familjes</Link>
                <span className="custom-arrow">&#62;</span>
              </div>
            </div>
            <div className="custom-service-card">
              <div className="custom-card-content">
                <FontAwesomeIcon icon={faAddressCard} className="custom-card-icon" />
                <Link to="/Certi" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Nuk është identifikuar asnjë anëtar i familjes që ka këtë status në sistemin e brendshëm të Zyrës së Gjendjes Civile.")}>Shkarko "Certifikaten e vdekjes " per anetare e familjes</Link>
                <span className="custom-arrow">&#62;</span>
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

export default GjendjaCivile;

