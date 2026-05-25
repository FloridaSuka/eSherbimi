import React from 'react';
import './eKomuna.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const eKomuna = () => {
  return (
      <div className="eKomuna-service-page">
        <div className="eKomuna-service-section">
          <h4 className="eKomuna-section-title">e-Komuna</h4>
          <div className="eKomuna-options">
            <input type="radio" id="eKomunaRadio1" name="eKomunaOptions" value="option1" />
            <label htmlFor="eKomunaRadio1">Option 1</label>
            <input type="radio" id="eKomunaRadio2" name="eKomunaOptions" value="option2" />
            <label htmlFor="eKomunaRadio2">Option 2</label>
            <input type="radio" id="eKomunaRadio3" name="eKomunaOptions" value="option3" />
            <label htmlFor="eKomunaRadio3">Option 3</label>
            <input type="radio" id="eKomunaRadio4" name="eKomunaOptions" value="option4" />
            <label htmlFor="eKomunaRadio4">Option 4</label>
          </div>
          <div className="eKomuna-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="eKomuna-service-cards-container">
          <div className="eKomuna-service-cards-wrapper">
            <div className="eKomuna-service-card">
            <div className="eKomuna-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="eKomuna-card-icon" />
                <Link to="/eKomuna/prishtina" style={{ color: '#333' }} className='linkcla'>Lejet dhe procedurat administrative per Komunen e Prishtines</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default eKomuna;