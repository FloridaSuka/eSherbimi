import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/iew.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle profile dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav className='container'>
           <div className="logo-container">
                <img src={logo} alt="" className='logo' />
                <span className="logo-name">Services</span>
            </div>
            <ul>
                <li>Kryesore</li>
                <li><Link to="/Sherbime">Sherbime</Link></li>
                <li><Link to="/Informata">Informata</Link></li>
                <li>
                    <button className='btn'>
                        <FontAwesomeIcon icon={faBell} className="notification-icon" />
                    </button>
                </li>
                <li>
                    <div className="profile-dropdown">
                        <button className='btn' onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faUser} className="profile-icon" />
                            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                        </button>
                        {dropdownVisible && (
                            <div className="dropdown-content">
                                <a href="#">Profili</a>
                                <a href="#">Logout</a>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
