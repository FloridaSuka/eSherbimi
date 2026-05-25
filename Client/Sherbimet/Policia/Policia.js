import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Policia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';


const Policia = () => {
  
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
      <div className="policia-service-page">
        <div className="policia-service-section">
          <h4 className="policia-section-title">Policia</h4>
          <div className="policia-options">
            <input type="radio" id="policiaRadio1" name="policiaOptions" value="option1" />
            <label htmlFor="policiaRadio1">Option 1</label>
            <input type="radio" id="policiaRadio2" name="policiaOptions" value="option2" />
            <label htmlFor="policiaRadio2">Option 2</label>
            <input type="radio" id="policiaRadio3" name="policiaOptions" value="option3" />
            <label htmlFor="policiaRadio3">Option 3</label>
            <input type="radio" id="policiaRadio4" name="policiaOptions" value="option4" />
            <label htmlFor="policiaRadio4">Option 4</label>
          </div>
          <div className="policia-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="policia-service-cards-container">
          <div className="policia-service-cards-wrapper">
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faShieldAlt} className="policia-card-icon" />
                <Link to="/Policia/Policia1" style={{ color: '#333' }} className='linkcla'>Kërkimi i gjobave individuale</Link>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faShieldAlt} className="policia-card-icon" />
                <Link to="/Policia/Policia2" style={{ color: '#333' }} className='linkcla'>Kërkimi i gjobave sipas referencës</Link>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faShieldAlt} className="policia-card-icon" />
                <Link to="/Policia/Policia3" style={{ color: '#333' }} className='linkcla'>Vërtetimi i të kalurës kriminale</Link>
                <span className="policia-arrow">&#62;</span>
              </div>
            </div>
            <div className="policia-service-card">
              <div className="policia-card-content">
                <FontAwesomeIcon icon={faShieldAlt} className="policia-card-icon" />
                <Link to="/P" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Për momentin nuk ka ndonjë konkurs të hapur.")}>Aplikimi për polic të ri</Link>
                <span className="policia-arrow">&#62;</span>
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

export default Policia;
