import React from 'react';
import './Gjyqesori.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGavel} from '@fortawesome/free-solid-svg-icons';

const Gjyqesori = () => {
  return (
      <div className="gjyqesori-service-page">
        <div className="gjyqesori-service-section">
          <h4 className="gjyqesori-section-title">Gjyqesori</h4>
          <div className="gjyqesori-options">
            <input type="radio" id="customRadio1" name="customOptions" value="option1" />
            <label htmlFor="customRadio1">Option 1</label>
            <input type="radio" id="customRadio2" name="customOptions" value="option2" />
            <label htmlFor="customRadio2">Option 2</label>
            <input type="radio" id="customRadio3" name="customOptions" value="option3" />
            <label htmlFor="customRadio3">Option 3</label>
            <input type="radio" id="customRadio4" name="customOptions" value="option4" />
            <label htmlFor="customRadio4">Option 4</label>
          </div>
          <div className="gjyqesori-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="gjyqesori-service-cards-container">
          <div className="gjyqesori-service-cards-wrapper">
            <div className="gjyqesori-service-card">
              <div className="gjyqesori-card-content">
                <FontAwesomeIcon icon={faGavel} className="gjyqesori-card-icon" />
                <Link to="/Gjyqesori/Gjyqesori1" style={{ color: '#333' }} className='linkcla'>Certifikata mbi dënimet penale</Link>
                <span className="gjyqesori-arrow">&#62;</span>
              </div>
            </div>
            <div className="gjyqesori-service-card">
              <div className="gjyqesori-card-content">
                <FontAwesomeIcon icon={faGavel} className="gjyqesori-card-icon" />
                <a href="https://ctm.gjyqesori-rks.org/" style={{ color: '#333' }} className='linkcla'>Monitorimi i statusit të lëndëve individuale në Gjykatë</a>
                <span className="gjyqesori-arrow">&#62;</span>
              </div>
            </div>
            <div className="gjyqesori-service-card">
              <div className="gjyqesori-card-content">
                <FontAwesomeIcon icon={faGavel} className="gjyqesori-card-icon" />
                <a href="https://odp.gjyqesori-rks.org/" style={{ color: '#333' }} className='linkcla'>Platforma e të dhënave "Online"</a>
                <span className="gjyqesori-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Gjyqesori;
