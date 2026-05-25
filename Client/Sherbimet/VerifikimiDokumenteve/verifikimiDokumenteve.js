import React from 'react';
import './verifikimiDokumenteve.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const verifikimiDokumenteve = () => {
  return (
      <div className="verifikimiDokumenteve-service-page">
        <div className="verifikimiDokumenteve-service-section">
          <h4 className="verifikimiDokumenteve-section-title">Verifikimi i Dokumenteve</h4>
          <div className="verifikimiDokumenteve-options">
            <input type="radio" id="verifikimiDokumenteveRadio1" name="verifikimiDokumenteveOptions" value="option1" />
            <label htmlFor="verifikimiDokumenteveRadio1">Option 1</label>
            <input type="radio" id="verifikimiDokumenteveRadio2" name="verifikimiDokumenteveOptions" value="option2" />
            <label htmlFor="verifikimiDokumenteveRadio2">Option 2</label>
            <input type="radio" id="verifikimiDokumenteveRadio3" name="verifikimiDokumenteveOptions" value="option3" />
            <label htmlFor="verifikimiDokumenteveRadio3">Option 3</label>
            <input type="radio" id="verifikimiDokumenteveRadio4" name="verifikimiDokumenteveOptions" value="option4" />
            <label htmlFor="verifikimiDokumenteveRadio4">Option 4</label>
          </div>
          <div className="verifikimiDokumenteve-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="verifikimiDokumenteve-service-cards-container">
          <div className="verifikimiDokumenteve-service-cards-wrapper">
            <div className="verifikimiDokumenteve-service-card">
            <div className="verifikimiDokumenteve-card-content">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="verifikimiDokumenteve-card-icon" />
                <Link to="/VerifikimiDokumenteve/dokElektronike" style={{ color: '#333' }} className='linkcla'>Verifikimi i dokumenteve elektronike</Link>
                <span className="new-arrow">&#62;</span>
             </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default verifikimiDokumenteve;