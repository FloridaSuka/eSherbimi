import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="left-content">
                    <p>&copy; 2024 Your Company.<br></br> All rights reserved.</p>
                </div>
                <div className="middle-content">
                    <p>
                        <Link to="/Kryesore">Kryesore</Link>
                    </p>
                    <p>
                        <Link to="/Sherbime">Sherbime</Link>
                    </p>
                    <p>
                        <a href="/">Informata</a>
                    </p>
                    <p>
                        <a href="/contact">Contact Us</a>
                    </p>
                </div>
                <div className="right-content">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                        <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
