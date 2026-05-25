import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Prona.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

const Prona = () => {
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
    <div className="prona-service-page">
      <div className="prona-service-section">
        <h4 className="prona-section-title">Prona</h4>
        <div className="prona-options">
          <input type="radio" id="customRadio1" name="customOptions" value="option1" />
          <label htmlFor="customRadio1">Option 1</label>
          <input type="radio" id="customRadio2" name="customOptions" value="option2" />
          <label htmlFor="customRadio2">Option 2</label>
          <input type="radio" id="customRadio3" name="customOptions" value="option3" />
          <label htmlFor="customRadio3">Option 3</label>
          <input type="radio" id="customRadio4" name="customOptions" value="option4" />
          <label htmlFor="customRadio4">Option 4</label>
        </div>
        <div className="prona-search-container">
          <input type="text" placeholder="Search..." />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>

      <div className="prona-service-cards-container">
        <div className="prona-service-cards-wrapper">
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faHome} className="prona-card-icon" />
              <Link to="/P" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Nuk është identifikuar asnjë pronë sipas numrit tuaj personal.Nëse keni prona tuaja dhe për të njëjtat nuk mund të nxirrni certifikatë, duhet të drejtoheni për verifikim dhe azhurnim të të dhënave personale në zyrën kadastrale komunale në komunën ku gjendet prona.")}>Certifikat mbi të drejtat në pronën e palujtshme</Link>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faHome} className="prona-card-icon" />
              <Link to="/P" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "I/e nderuar,Sipas Agjencisë për Regjistrimin e Bizneseve të Kosovës (ARBK), nuk është identifikuar asnjë biznes i regjistruar sipas numrit tuaj personal.Ju lutemi të siguroheni që posedoni biznese aktive të regjistruara në ARBK.")}>Certifikat mbi të drejtat në pronën e palujtshme për biznese</Link>
              <span className="prona-arrow">&#62;</span>
            </div>
          </div>
          <div className="prona-service-card">
            <div className="prona-card-content">
              <FontAwesomeIcon icon={faHome} className="prona-card-icon" />
              <Link to="/Prona/Prona1" style={{ color: '#333' }} className='linkcla'>Aplikimi për vazhdim të licensës së vlerësuesve të pronave të paluajtshme</Link>
              <span className="prona-arrow">&#62;</span>
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

export default Prona;
