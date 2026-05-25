import React, { useState } from 'react';
import './Grante&Subvencione.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons';

const GranteSubvencione = () => {
  const [showAlert, setShowAlert] = useState(false);
  
  const handleLinkClick = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
      <div className="granteSubvencione-service-page">
        <div className="granteSubvencione-service-section">
          <h4 className="granteSubvencione-section-title">Grante dhe Subvencione</h4>
          <div className="granteSubvencione-options">
            <input type="radio" id="granteSubvencioneRadio1" name="granteSubvencioneOptions" value="option1" />
            <label htmlFor="granteSubvencioneRadio1">Option 1</label>
            <input type="radio" id="granteSubvencioneRadio2" name="granteSubvencioneOptions" value="option2" />
            <label htmlFor="granteSubvencioneRadio2">Option 2</label>
            <input type="radio" id="granteSubvencioneRadio3" name="granteSubvencioneOptions" value="option3" />
            <label htmlFor="granteSubvencioneRadio3">Option 3</label>
            <input type="radio" id="granteSubvencioneRadio4" name="granteSubvencioneOptions" value="option4" />
            <label htmlFor="granteSubvencioneRadio4">Option 4</label>
          </div>
          <div className="granteSubvencione-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="granteSubvencione-service-cards-container">
          <div className="granteSubvencione-service-cards-wrapper">
            <div className="granteSubvencione-service-card">
            <div className="granteSubvencione-card-content">
                <FontAwesomeIcon icon={faMoneyBillAlt} className="granteSubvencione-card-icon" />
                <Link to="/Grante&Subvencione/Makinerite" style={{ color: '#333' }} className='linkcla' onClick={handleLinkClick}>Thirrje publike per subvencionim te NVM-ve per blerjen e makinerive prodhuese</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
            <div className="granteSubvencione-service-card">
            <div className="granteSubvencione-card-content">
                <FontAwesomeIcon icon={faMoneyBillAlt} className="granteSubvencione-card-icon" />
                <Link to="/Grante&Subvencione/Ankesat" style={{ color: '#333' }} className='linkcla' onClick={handleLinkClick}>Formulari per ankese</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>

        {showAlert && (
        <div className="custom-alert">
          <h5>Njoftim</h5>
          <p>Afati i aplikimit per grante dhe subvencione momentalisht eshte i mbyllur. Ankesat mund te behen vetem pas hapjes se afatit per aplikim.</p>
          <button onClick={handleCloseAlert}>Close</button>
        </div>
      )}
      </div>
  );
}

export default GranteSubvencione;