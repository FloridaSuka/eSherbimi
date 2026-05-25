import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shendetesia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faNotesMedical} from '@fortawesome/free-solid-svg-icons';

const Shendetesia = () => {
  const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");


    const handleLinkClick = (event, message) => {
        event.preventDefault();
        setAlertMessage(message);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };
  return (
      <div className="shendetesia-service-page">
        <div className="shendetesia-service-section">
          <h4 className="shendetesia-section-title">Shendetesia</h4>
          <div className="shendetesia-options">
            <input type="radio" id="customRadio1" name="customOptions" value="option1" />
            <label htmlFor="customRadio1">Option 1</label>
            <input type="radio" id="customRadio2" name="customOptions" value="option2" />
            <label htmlFor="customRadio2">Option 2</label>
            <input type="radio" id="customRadio3" name="customOptions" value="option3" />
            <label htmlFor="customRadio3">Option 3</label>
            <input type="radio" id="customRadio4" name="customOptions" value="option4" />
            <label htmlFor="customRadio4">Option 4</label>
          </div>
          <div className="shendetesia-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="shendetesia-service-cards-container">
          <div className="shendetesia-service-cards-wrapper">
            <div className="shendetesia-service-card">
              <div className="shendetesia-card-content">
                <FontAwesomeIcon icon={faNotesMedical} className="shendetesia-card-icon" />
                <Link to="/Certi" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Ministria e Shëndetësisë është duke pilotuar shërbimet e përzgjedhjes së mjekut familjar për komunat Prishtinë, Lipjan, Prizren dhe Istog. Pas përfundimit të fazës së pilotimit, aplikimi do të mundësohet edhe për komunat tjera.")}>Kerkesa per perzgjedhjen ne mjekut familjar"</Link>
                <span className="shendetesia-arrow">&#62;</span>
              </div>
            </div>
            <div className="shendetesia-service-card">
              <div className="shendetesia-card-content">
                <FontAwesomeIcon icon={faNotesMedical} className="shendetesia-card-icon" />
                <Link to="/Certi" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Sipas sistemit informativ shëndetësor të Ministrisë së Shëndetësisë, ju ende nuk keni përzgjedhur mjekun familjar dhe për këtë arsye nuk mund të parashtroni kërkesë për ndryshimin e mjekut familjar.Për të zgjedhur mjekun familjar, klikoni këtu.")}>Kerkese per ndryshimin e mjekut familjar"</Link>
                <span className="shendetesia-arrow">&#62;</span>
              </div>
            </div>
            <div className="shendetesia-service-card">
              <div className="shendetesia-card-content">
                <FontAwesomeIcon icon={faNotesMedical} className="shendetesia-card-icon" />
                <Link to="/Shendetsia/Shend1" style={{ color: '#333' }} className='linkcla' >Kërkesë për përzgjedhjen e mjekut familjar për persona tjerë</Link>
                <span className="shendetesia-arrow">&#62;</span>
              </div>
            </div>
            <div className="shendetesia-service-card">
              <div className="shendetesia-card-content">
                <FontAwesomeIcon icon={faNotesMedical} className="shendetesia-card-icon" />
                <Link to="/Shendetsia/Shend2" style={{ color: '#333' }} className='linkcla' >Kërkesë për ndryshimin e mjekut familjar për persona tjerë</Link>
                <span className="shendetesia-arrow">&#62;</span>
              </div>
            </div>
            <div className="shendetesia-service-card">
              <div className="shendetesia-card-content">
                <FontAwesomeIcon icon={faNotesMedical} className="shendetesia-card-icon" />
                <Link to="/Shendetsia/Shend3" style={{ color: '#333' }} className='linkcla' >Pasaporta Elektronike e Vaksinimit</Link>
                <span className="shendetesia-arrow">&#62;</span>
              </div>
            </div>
          </div>
        </div>
        {showAlert && (
                <div className="custom-alert">
                    <h5>Njoftim</h5>
                    <p>{alertMessage}</p>
                    <button onClick={handleCloseAlert}>Close</button>
                </div>
            )}
      </div>
  );
}

export default Shendetesia;

