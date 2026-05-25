import React from 'react';
import './Banderolat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const banderolat = () => {
  return (
      <div className="banderolat-service-page">
        <div className="banderolat-service-section">
          <h4 className="banderolat-section-title">Banderolat</h4>
          <div className="banderolat-options">
            <input type="radio" id="banderolatRadio1" name="banderolatOptions" value="option1" />
            <label htmlFor="banderolatRadio1">Option 1</label>
            <input type="radio" id="banderolatRadio2" name="banderolatOptions" value="option2" />
            <label htmlFor="banderolatRadio2">Option 2</label>
            <input type="radio" id="banderolatRadio3" name="banderolatOptions" value="option3" />
            <label htmlFor="banderolatRadio3">Option 3</label>
            <input type="radio" id="banderolatRadio4" name="banderolatOptions" value="option4" />
            <label htmlFor="banderolatRadio4">Option 4</label>
          </div>
          <div className="banderolat-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="banderolat-service-cards-container">
          <div className="banderolat-service-cards-wrapper">
            <div className="banderolat-service-card">
            <div className="banderolat-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="banderolat-card-icon" />
                <Link to="/Banderolat/verifikimi" style={{ color: '#333' }} className='linkcla'>Verifiko Banderolat nga Agjencia e Kosoves per Produkte dhe Pajisje Medicinale</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default banderolat;