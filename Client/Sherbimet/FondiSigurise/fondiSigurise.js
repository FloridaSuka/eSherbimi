import React from 'react';
import './fondiSigurise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const fondiSigurise = () => {
  return (
      <div className="fondiSigurise-service-page">
        <div className="fondiSigurise-service-section">
          <h4 className="fondiSigurise-section-title">Fondi i Sigurise</h4>
          <div className="fondiSigurise-options">
            <input type="radio" id="fondiSiguriseRadio1" name="fondiSiguriseOptions" value="option1" />
            <label htmlFor="fondiSiguriseRadio1">Option 1</label>
            <input type="radio" id="fondiSiguriseRadio2" name="fondiSiguriseOptions" value="option2" />
            <label htmlFor="fondiSiguriseRadio2">Option 2</label>
            <input type="radio" id="fondiSiguriseRadio3" name="fondiSiguriseOptions" value="option3" />
            <label htmlFor="fondiSiguriseRadio3">Option 3</label>
            <input type="radio" id="fondiSiguriseRadio4" name="fondiSiguriseOptions" value="option4" />
            <label htmlFor="fondiSiguriseRadio4">Option 4</label>
          </div>
          <div className="fondiSigurise-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="fondiSigurise-service-cards-container">
          <div className="fondiSigurise-service-cards-wrapper">
          <div className="new-service-card">
                        <div className="new-card-content">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="new-card-icon" />
                            <Link to="/FondiSigurise/donacioni" style={{ color: '#333' }} className='linkcla'>Donacion përmes pagesës elektronike me banka komerciale</Link>
                            <span className="new-arrow">&#62;</span>
                        </div>
                    </div>
          </div>
        </div>
      </div>
  );
}

export default fondiSigurise;