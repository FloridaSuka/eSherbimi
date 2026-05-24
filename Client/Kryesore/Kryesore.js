import React from "react";
import './Kryesore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faUserLock } from '@fortawesome/free-solid-svg-icons';
import aa from '../../assets/aa.jpg';
import bb from '../../assets/bb.jpg';
import e from '../../assets/e.jpg';
import er from '../../assets/er.jpg';
import { Link } from 'react-router-dom';

const Kryesore = () => {

    const handleSignUp = () => {
        ("/Register");
    };

    const handleLogIn = () => {
        ("/Login");
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
    };


    return (
        <div className="kryesore-form-container">
            <h1>Platforma e shërbimeve online</h1>
            <p>eService është platformë shtetërore ku shërbimet publike që gjenden në zyrat dhe sportelet fizike të institucioneve ofrohen në mënyrë elektronike.</p>
            <div className="Bon-conta">
            <Link to="/Register"><button type="button" onClick={handleSignUp} className="Form-bu">Sign Up</button> </Link>
            <Link to="/Login"><button type="button" onClick={handleLogIn} className="Form-bu">Log In</button></Link>
            </div>

            <fieldset className="kryesore-form-wrapper">
                <FontAwesomeIcon icon={faUserLock} className="iccon" />
                <div className="kryesore-section">
                    <h4>A e dini se eService mundëson autentikim të sigurt përmes kodi verifikues?</h4>
                    <div className="kryesore-card-content">
                        <p style={{ color: '#333' }} className='kryesore-link'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae a sequi incidunt, vitae nesciunt quasi iure quos deserunt.<br />
                            <a href="/Profili" onClick={handleLinkClick}>Për të kaluar tek profili, klikoni këtu.</a>
                        </p>
                    </div>
                </div>
            </fieldset>

            <fieldset className="kryesore-form-wrapper">
                <FontAwesomeIcon icon={faExclamationTriangle} className="icconn" />
                <div className="kryesore-section">
                    <h4>Vemendje</h4>
                    <div className="kryesore-card-content">
                        <p style={{ color: '#333' }} className='kryesore-link'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae a sequi incidunt, vitae nesciunt quasi iure quos deserunt.<br />
                        </p>
                    </div>
                </div>
            </fieldset>

            <div className="image-section">
                <h3 className="h33"> Lorem ipsum</h3>
                <div className="image-container">
                    <img src={aa} alt="E" />
                    <img src={bb} alt="R" />
                    <img src={e} alt="R" />
                    <img src={er} alt="Ne" />
                </div>
            </div>

            <div className="ima-section">
                <div className="ima-container">
                <div className="ima-box">
                    <div className="Bo-conta">
                        <h3 className="Fo-bu">1</h3>
                    </div>
                    <h4>Krijo llogarin tende</h4>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae</p>
                </div>
                    <div className="ima-box">
                    <div className="Bo-conta">
                        <h3 className="Fo-bu buo">2</h3>
                    </div>
                        <h4>Zgjedh shërbimin</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae</p>
                    </div>
                    <div className="ima-box">
                    <div className="Bo-conta">
                        <h3 className="Fo-bu bui">3</h3>
                    </div>
                        <h4>Prano shërbimin</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique qui quaerat nihil sapiente sed autem tenetur cupiditate maiores, voluptates sint recusandae</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Kryesore;
