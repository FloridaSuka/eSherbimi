import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Automjeti.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCar} from '@fortawesome/free-solid-svg-icons';

const Automjeti = () => {

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
      <div className="automjeti-service-page">
        <div className="automjeti-service-section">
          <h4 className="automjeti-section-title">Automjeti</h4>
          <div className="automjeti-options">
            <input type="radio" id="automjetiRadio1" name="automjetiOptions" value="option1" />
            <label htmlFor="automjetiRadio1">Option 1</label>
            <input type="radio" id="automjetiRadio2" name="automjetiOptions" value="option2" />
            <label htmlFor="automjetiRadio2">Option 2</label>
            <input type="radio" id="automjetiRadio3" name="automjetiOptions" value="option3" />
            <label htmlFor="automjetiRadio3">Option 3</label>
            <input type="radio" id="automjetiRadio4" name="automjetiOptions" value="option4" />
            <label htmlFor="automjetiRadio4">Option 4</label>
          </div>
          <div className="automjeti-search-container">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="automjeti-service-cards-container">
          <div className="automjeti-service-cards-wrapper">
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Pa" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Referuar numrit tuaj personal (ID-së), nuk është identifikuar asnjë lëndë e hapur për ndonjë nga kategoritë e patentë shoferit në platformën e-Testimi në kuadër të Ministria e Mjedisit, Planifikimit Hapësinor dhe Infrastrukturës. Nëse konsideroni se ju keni realizuar aplikimet përkatëse dhe plotësoni kushtin për ndarjen e provimit, ju lutemi të kontaktoni me autoshkollën tuaj dhe/ose qendrën për patentë shoferë.")}>Ndarja e terminit te provimit per patent shofer...</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Pa" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Referuar numrit tuaj personal (ID-së), nuk është identifikuar asnjë lëndë e hapur për ndonjë nga kategoritë e patentë shoferit në platformën e-Testimi në kuadër të Ministria e Mjedisit, Planifikimit Hapësinor dhe Infrastrukturës.Nëse konsideroni se ju keni realizuar aplikimet përkatëse dhe plotësoni kushtin për ndarjen e provimit, ju lutemi të kontaktoni me autoshkollën tuaj dhe/ose qendrën për patentë shoferë.")}>Ndarja e terminit te provimit per patent shofer...</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Automjeti/AutoT" style={{ color: '#333' }} className='linkcla'>Taksa komunale për regjistrim të automjetit personal</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Automjeti/AutoB" style={{ color: '#333' }} className='linkcla'>Taksa komunale për regjistrim të automjetit për persona të tjerë</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Pa" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Nuk është identifikuar asnjë automjet konform numrit tuaj të identifikimit.")}>Vazhdimi i regjistrimit të automjetitnnga pronari individual</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Pa" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Llogaria juaj është e tipit individuale dhe nuk është identifikuar ndërlidhje me llogari biznesore. Nëse posedoni biznes të regjistruar në emrin tuaj, atëherë ju lusim që të regjistroni atë në llogarinë tuaj përmes shtegut: Profili > Bizneset.")}>Vazhdimi i regjistrimit te automjetit nga pronari biznesor</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Automjeti/AutoP" style={{ color: '#333' }} className='linkcla'>Kerkese per targa me porosi nga pronari individual</Link>
                <span className="automjeti-arrow">&#62;</span>
              </div>
            </div>
            <div className="automjeti-service-card">
              <div className="automjeti-card-content">
                <FontAwesomeIcon icon={faCar} className="automjeti-card-icon" />
                <Link to="/Pa" style={{ color: '#333' }} className='linkcla' onClick={(e) => handleLinkClick(e, "Llogaria juaj është e tipit individuale dhe nuk është identifikuar ndërlidhje me llogari biznesore. Nëse posedoni biznes të regjistruar në emrin tuaj, atëherë ju lusim që të regjistroni atë në llogarinë tuaj përmes shtegut: Profili > Bizneset.")}>Kerkese per targa me porosi nga pronari biznesor</Link>
                <span className="automjeti-arrow">&#62;</span>
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

export default Automjeti;
