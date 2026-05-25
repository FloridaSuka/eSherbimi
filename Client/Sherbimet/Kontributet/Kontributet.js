import React from 'react';
import './Kontributet.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';

const Kontributet = () => {
  return (
      <div className="kontributet-service-page">
        <div className="kontributet-service-section">
          <h4 className="kontributet-section-title">Kontributet dhe pensioni</h4>
          <div className="kontributet-options">
            <input type="radio" id="kontributetRadio1" name="kontributetOptions" value="option1" />
            <label htmlFor="kontributetRadio1">Option 1</label>
            <input type="radio" id="kontributetRadio2" name="kontributetOptions" value="option2" />
            <label htmlFor="kontributetRadio2">Option 2</label>
            <input type="radio" id="kontributetRadio3" name="kontributetOptions" value="option3" />
            <label htmlFor="kontributetRadio3">Option 3</label>
            <input type="radio" id="kontributetRadio4" name="kontributetOptions" value="option4" />
            <label htmlFor="kontributetRadio4">Option 4</label>
          </div>
          <div className="kontributet-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="kontributet-service-cards-container">
          <div className="kontributet-service-cards-wrapper">
            <div className="kontributet-service-card">
              <div className="kontributet-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="kontributet-card-icon" />
                <Link to="/Kontributet/Kon" style={{ color: '#333' }} className='linkcla'>Pasqyra e kursimeve pensionale</Link>
                <span className="kontributet-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Kontributet;
