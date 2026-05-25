import React from 'react';
import './Sherbimetkons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const sherbimetkons = () => {
  return (
      <div className="sherbimetkons-service-page">
        <div className="sherbimetkons-service-section">
          <h4 className="sherbimetkons-section-title">Sherbimet Konsulore</h4>
          <div className="sherbimetkons-options">
            <input type="radio" id="sherbimetkonsRadio1" name="sherbimetkonsOptions" value="option1" />
            <label htmlFor="sherbimetkonsRadio1">Option 1</label>
            <input type="radio" id="sherbimetkonsRadio2" name="sherbimetkonsOptions" value="option2" />
            <label htmlFor="sherbimetkonsRadio2">Option 2</label>
            <input type="radio" id="sherbimetkonsRadio3" name="sherbimetkonsOptions" value="option3" />
            <label htmlFor="sherbimetkonsRadio3">Option 3</label>
            <input type="radio" id="sherbimetkonsRadio4" name="sherbimetkonsOptions" value="option4" />
            <label htmlFor="sherbimetkonsRadio4">Option 4</label>
          </div>
          <div className="sherbimetkons-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="sherbimetkons-service-cards-container">
          <div className="sherbimetkons-service-cards-wrapper">
            <div className="sherbimetkons-service-card">
            <div className="sherbimetkons-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="sherbimetkons-card-icon" />
                <Link to="/SherbimetKonsulore/Vula" style={{ color: '#333' }} className='linkcla'>Vula Apostile dhe Legalizuese ne MPJD</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default sherbimetkons;