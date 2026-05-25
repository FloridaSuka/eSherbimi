import React from 'react';
import './Sherbime.css';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard, faCog, faFileInvoiceDollar, faUsers, faNotesMedical,
faCarSide, faFile, faSearch,faShieldAlt,faGavel} from '@fortawesome/free-solid-svg-icons';

const Sherbime = () => {
  return (
      <div className="service-page">
        <div className="sporteli">
          <h4>Sporteli Virtual</h4>
          <div className="radio-buttons">
            <input type="radio" id="radio1" name="sporteli" value="option1" />
            <label htmlFor="radio1"> Option 1</label>
            <input type="radio" id="radio2" name="sporteli" value="option2" />
            <label htmlFor="radio2"> Option 2</label>
            <input type="radio" id="radio3" name="sporteli" value="option3" />
            <label htmlFor="radio3"> Option 3</label>
            <input type="radio" id="radio4" name="sporteli" value="option4" />
            <label htmlFor="radio4"> Option 4</label>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>
        <div className="service-cards-container">
      <div className="service-cards-top">
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faAddressCard} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/GjendjaCivile" style={{ color: '#333' }} className='linkclass'>Gjendja Civile</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Tatimet" style={{ color: '#333'}} className='linkclass'>Tatimet</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faUsers} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Familja" style={{ color: '#333'}} className='linkclass'>Familja</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faNotesMedical} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Shendetesia" style={{ color: '#333'}} className='linkclass'>Shendetesia</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCarSide} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Automjeti" style={{ color: '#333'}} className='linkclass'>Automjeti</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Policia" style={{ color: '#333'}} className='linkclass'>Policia</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faFile} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Komunalite" style={{ color: '#333'}} className='linkclass'>Komunalite</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Prona" style={{ color: '#333'}} className='linkclass'>Prona</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Kontributet" style={{ color: '#333'}} className='linkclass'>Kontributet dhe pensioni</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faGavel} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/Gjyqesori" style={{ color: '#333'}} className='linkclass'>Gjyqesori</Link>
          </div>
        </div>
       <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCog} className="service-icon" />
          </div>
          <div className="service-card-content">
          <Link to="/Sherbimet/" style={{ color: '#333'}} className='linkclass'>Service Name</Link>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Sherbime;

