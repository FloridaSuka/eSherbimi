import React from 'react';
import './Informata.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard, faBuilding, faSeedling,  faShieldAlt, faUsers, faNotesMedical, faTree,
  faBookOpen, faGlobeAmericas, faBriefcase,  faCity, faIcons, faInfoCircle,
  faHotel,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons';

const Informata = () => {
  return (
    <div className="informata">
      <div className="informata-container">
        <h4 className='in'>Informata</h4>
      </div>
      <div className="servi-cards-container">
        <div className="servi-cards-top">
        <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBuilding} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <a href="Files/CentralServices.xlsx" download style={{ color: '#333' }} className='service-link'>Sherbimet ne nivel qendror</a>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faHotel} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <a href="/Files/LocalServices.xlsx" download style={{ color: '#333' }} className='service-link'>Sherbimet ne nivel lokal</a>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faSeedling} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/BeA" style={{ color: '#333' }} className='service-link'>Benefitet dhe asistenca</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faCircleNotch} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/LK" style={{ color: '#333' }} className='service-link'>Levizja dhe komunikimi</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faUsers} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/Fa" style={{ color: '#333' }} className='service-link'>Familja</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
            </div>
            <div className="service-card-content">
              <Link to="/Informata/Sig" style={{ color: '#333' }} className='service-link'>Siguria</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faNotesMedical} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/She" style={{ color: '#333' }} className='service-link'>Shendetesia</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTree} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/AN" style={{ color: '#333' }} className='service-link'>Ambienti dhe natyra</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBookOpen} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/ED" style={{ color: '#333' }} className='service-link'>Edukimi</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
            <FontAwesomeIcon icon={faGlobeAmericas}  className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/Me" style={{ color: '#333' }} className='service-link'>Mergata</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/PB" style={{ color: '#333' }} className='service-link'>Puna dhe biznesi</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
            <FontAwesomeIcon icon={faInfoCircle} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/IH" style={{ color: '#333' }} className='service-link'>Informata per te huajt</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faCity} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/PrB" style={{ color: '#333' }} className='service-link'>Prona dhe banimi</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faIcons} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/KL" style={{ color: '#333' }} className='service-link'>Kultura dhe koha e lire</Link>
            </div>
          </div>
          <div className="servi-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAddressCard} className="service-icon" />
            </div>
            <div className="servi-card-content">
              <Link to="/Informata/Doc" style={{ color: '#333' }} className='service-link'>Dokumente</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informata;
