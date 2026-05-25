import React, { useState } from 'react';
import './auditoretLigjore.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons';

const auditoretLigjore = () => {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleLinkClick = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
      <div className="auditoretLigjore-service-page">
        <div className="auditoretLigjore-service-section">
          <h4 className="auditoretLigjore-section-title">Grante dhe Subvencione</h4>
          <div className="auditoretLigjore-options">
            <input type="radio" id="auditoretLigjoreRadio1" name="auditoretLigjoreOptions" value="option1" />
            <label htmlFor="auditoretLigjoreRadio1">Option 1</label>
            <input type="radio" id="auditoretLigjoreRadio2" name="auditoretLigjoreOptions" value="option2" />
            <label htmlFor="auditoretLigjoreRadio2">Option 2</label>
            <input type="radio" id="auditoretLigjoreRadio3" name="auditoretLigjoreOptions" value="option3" />
            <label htmlFor="auditoretLigjoreRadio3">Option 3</label>
            <input type="radio" id="auditoretLigjoreRadio4" name="auditoretLigjoreOptions" value="option4" />
            <label htmlFor="auditoretLigjoreRadio4">Option 4</label>
          </div>
          <div className="auditoretLigjore-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="auditoretLigjore-service-cards-container">
          <div className="auditoretLigjore-service-cards-wrapper">
            <div className="auditoretLigjore-service-card">
            <div className="auditoretLigjore-card-content">
                <FontAwesomeIcon icon={faMoneyBillAlt} className="auditoretLigjore-card-icon" />
                <Link to="/AuditoretLigjore/PertrirjaLicenses" style={{ color: '#333' }} className='linkcla' onClick={handleLinkClick}>Aplikimi per firme te auditimeve ligjore per pertrirje te licenses</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>

        {showAlert && (
        <div className="custom-alert">
          <h5>Njoftim</h5>
          <p>Ju nuk mund te beni pertrirje te licenses per arsye se nuk keni ndonje firme te auditimeve ligjore te regjistruar.</p>
          <button onClick={handleCloseAlert}>Close</button>
        </div>
      )}
      </div>
  );
}

export default auditoretLigjore;