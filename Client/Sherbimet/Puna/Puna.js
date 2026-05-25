import React from 'react';
import './Puna.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const puna = () => {
  return (
      <div className="puna-service-page">
        <div className="puna-service-section">
          <h4 className="puna-section-title">Puna</h4>
          <div className="puna-options">
            <input type="radio" id="punaRadio1" name="punaOptions" value="option1" />
            <label htmlFor="punaRadio1">Option 1</label>
            <input type="radio" id="punaRadio2" name="punaOptions" value="option2" />
            <label htmlFor="punaRadio2">Option 2</label>
            <input type="radio" id="punaRadio3" name="punaOptions" value="option3" />
            <label htmlFor="punaRadio3">Option 3</label>
            <input type="radio" id="punaRadio4" name="punaOptions" value="option4" />
            <label htmlFor="punaRadio4">Option 4</label>
          </div>
          <div className="puna-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="puna-service-cards-container">
          <div className="puna-service-cards-wrapper">
            <div className="puna-service-card">
            <div className="puna-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="puna-card-icon" />
                <Link to="/Puna/Deklarimi" style={{ color: '#333' }} className='linkcla'>Deklarimi per anetaresim ne sindikate</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default puna;

