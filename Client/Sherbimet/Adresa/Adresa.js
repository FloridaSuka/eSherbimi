import React from 'react';
import './Adresa.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase} from '@fortawesome/free-solid-svg-icons';

const Adresa = () => {
  return (
      <div className="adresa-service-page">
        <div className="adresa-service-section">
          <h4 className="adresa-section-title">Adresa</h4>
          <div className="adresa-options">
            <input type="radio" id="adresaRadio1" name="adresaOptions" value="option1" />
            <label htmlFor="adresaRadio1">Option 1</label>
            <input type="radio" id="adresaRadio2" name="adresaOptions" value="option2" />
            <label htmlFor="adresaRadio2">Option 2</label>
            <input type="radio" id="adresaRadio3" name="adresaOptions" value="option3" />
            <label htmlFor="adresaRadio3">Option 3</label>
            <input type="radio" id="adresaRadio4" name="adresaOptions" value="option4" />
            <label htmlFor="adresaRadio4">Option 4</label>
          </div>
          <div className="adresa-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="adresa-service-cards-container">
          <div className="adresa-service-cards-wrapper">
            <div className="adresa-service-card">
            <div className="adresa-card-content">
                <FontAwesomeIcon icon={faBriefcase} className="adresa-card-icon" />
                <Link to="/Adresa/adPostare" style={{ color: '#333' }} className='linkcla'>Deklarimi per anetaresim ne sindikate</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Adresa;

