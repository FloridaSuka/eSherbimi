import React, { useState } from 'react';
import './Familja.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers} from '@fortawesome/free-solid-svg-icons';

const Familja = () => {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleLinkClick = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <div className="familja-service-page">
      <div className="familja-service-section">
        <h4 className="familja-section-title">Familja</h4>
        <div className="familja-options">
          <input type="radio" id="familjaRadio1" name="familjaOptions" value="option1" />
          <label htmlFor="familjaRadio1">Option 1</label>
          <input type="radio" id="familjaRadio2" name="familjaOptions" value="option2" />
          <label htmlFor="familjaRadio2">Option 2</label>
          <input type="radio" id="familjaRadio3" name="familjaOptions" value="option3" />
          <label htmlFor="familjaRadio3">Option 3</label>
          <input type="radio" id="familjaRadio4" name="familjaOptions" value="option4" />
          <label htmlFor="familjaRadio4">Option 4</label>
        </div>
        <div className="familja-search-container">
          <input type="text" placeholder="Search..." />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>

      <div className="familja-service-cards-container">
        <div className="familja-service-cards-wrapper">
          <div className="familja-service-card">
            <div className="familja-card-content">
              <FontAwesomeIcon icon={faUsers} className="familja-card-icon" />
              <Link to="/Familja/ApLehonat" style={{ color: '#333' }} className='linkcla'>Aplikimi per shtesat per lehonat</Link>
              <span className="familja-arrow">&#62;</span>
            </div>
          </div>
          <div className="familja-service-card">
            <div className="familja-card-content">
              <FontAwesomeIcon icon={faUsers} className="familja-card-icon" />
              <Link to="/Familja/ApFemije" style={{ color: '#333' }} className='linkcla'>Aplikimi per shtesat per femije</Link>
              <span className="familja-arrow">&#62;</span>
            </div>
          </div>
          <div className="familja-service-card">
            <div className="familja-card-content">
              <FontAwesomeIcon icon={faUsers} className="familja-card-icon" />
              <Link to="/Familja/ApKredi" style={{ color: '#333' }} className='linkcla' onClick={handleLinkClick}>Aplikimi per subvencionim te kredis personale</Link>
              <span className="familja-arrow">&#62;</span>
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="custom-alert">
          <h5>Njoftim</h5>
          <p>Ka skaduar afati për të aplikuar për shërbimin 'Aplikim për subvencionim të kredisë personale'. 
            Për rezultatet e vlerësimit do të njoftoheni sipas afateve zyrtare të shërbimit që ju keni aplikuar.</p>
          <button onClick={handleCloseAlert}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Familja;

