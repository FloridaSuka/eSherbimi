import React, { useState } from "react";
import axios from 'axios';
import './ApLegonat.css';

function ApLehonat() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nrPersonal, setNrPersonal] = useState("");
    const [contact, setContact] = useState("");
    const [adresa, setAdresa] = useState("");
    const [nrXhiro, setNrXhiro] = useState("");
    const [gender, setGender] = useState("male");
    const [isEmployed, setIsEmployed] = useState("");
    const [aprovoj, setAprovoj] = useState(false);
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [nrFoshnjes, setNrFoshnjes] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    
        try {
            const response = await axios.post('http://localhost:3001/api/ap_lehonat', {
                firstName,
                lastName,
                email,
                nrPersonal,
                contact,
                adresa,
                nrXhiro,
                gender,
                isEmployed: isEmployed === "Yes",
                aprovoj,
                english: subjects.english,
                maths: subjects.maths,
                physics: subjects.physics,
                nrFoshnjes,
                nationality: selectedOption,
                about
            });
            console.log('Data saved:', response.data);
            setData(response.data);
            alert('New entry created successfully');
        } catch (err) {
            setError('Error submitting form');
            console.error('Error submitting form:', err.response ? err.response.data : err.message);
        }
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNrPersonal("");
        setContact("");
        setAdresa("");
        setNrXhiro("");
        setGender("male");
        setIsEmployed("");
        setAprovoj(false);
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setNrFoshnjes("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="Form-container">
            <h1>Application for Lehonat Benefits</h1>
            <fieldset className="Form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="Left-column">
                        <h4>Parent's Information</h4>
                        <label htmlFor="firstname">First Name*</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required className="Form-input" />

                        <label htmlFor="lastname">Last Name*</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required className="Form-input" />

                        <label htmlFor="nrPersonal">NrPersonal*</label>
                        <input type="text" name="nrPersonal" id="nrPersonal" value={nrPersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder="Enter NrPersonal" required className="Form-input" />

                        <label htmlFor="email">Enter Email*</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="Form-input" />

                        <label htmlFor="tel">Contact*</label>
                        <input type="tel" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Mobile number" required className="Form-input" />

                        <label htmlFor="addresa">Addresa*</label>
                        <input type="text" name="adresa" id="adresa" value={adresa} onChange={(e) => setAdresa(e.target.value)} placeholder="Enter Address" required className="Form-input" />

                        <label htmlFor="nrXhiro">NrXhirollogaris*</label>
                        <input type="text" name="nrXhiro" id="nrXhiro" value={nrXhiro} onChange={(e) => setNrXhiro(e.target.value)} placeholder="Enter NrXhirollogaris" required className="Form-input" />
                        <p className="Note">Attention. The bank account must be in the applicant's name. All applications made with another bank account will be rejected.</p>

                        <label htmlFor="gender">Gender*</label>
                        <div className="Gender-options">
                            <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} className="Form-input" />
                            <label htmlFor="male">Male</label>

                            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} className="Form-input" />
                            <label htmlFor="female">Female</label>

                            <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} className="Form-input" />
                            <label htmlFor="other">Other</label>
                        </div>

                        <label htmlFor="isEmployed" className="isEmployed">Have you been employed in the last 12 months?</label>
                        <div className="isEmployed-options">
                            <input type="radio" name="isEmployed" value="Yes" id="Yes" checked={isEmployed === "Yes"} onChange={(e) => setIsEmployed(e.target.value)} className="Form-input" />
                            <label htmlFor="Yes">Yes</label>

                            <input type="radio" name="isEmployed" value="No" id="No" checked={isEmployed === "No"} onChange={(e) => setIsEmployed(e.target.value)} className="Form-input" />
                            <label htmlFor="No">No</label>
                        </div>
                    </div>

                    <div className="Right-column">
                        <h4>Të dhënat e foshnjës</h4>

                        <label htmlFor="nrfoshnjes">NrPersonal i foshnjes*</label>
                        <input type="text" name="nrfoshnjes" id="nrfoshnjes" value={nrFoshnjes} onChange={(e) => setNrFoshnjes(e.target.value)} placeholder="Enter NrPersonal i foshnjes" required className="Form-input" />

                        <label htmlFor="select">Select your choice</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="Form-input">
                            <option value="" disabled>Select your Nationality</option>
                            <option value="Shqiptar">Shqiptar</option>
                            <option value="Serb">Serb</option>
                            <option value="Turk">Turk</option>
                            <option value="Boshnjak">Boshnjak</option>
                            <option value="Rom">Rom</option>
                            <option value="Ashkali">Ashkali</option>
                            <option value="Te tjera">Te tjera</option>
                        </select>
                    </div> 

                    <p className="Note">I declare that I am a bride and meet the criteria for benefits from Package 3.5 of the Economic Revival Package according to the decision of the Ministry of Finance, Labor and Transfers 54/2021 dated 0.8.09.2021</p>
                    <div className="Subject-options">
                        <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj} onChange={(e) => setAprovoj(e.target.checked)} className="Form-input" />
                        <label htmlFor="aprovoj">Aprovoj</label>
                    </div>

                    <div className="Button-container">
                        <button type="reset" value="reset" onClick={handleReset} className="Form-button">Reset</button>
                        <button type="submit" value="Submit" className="Form-button">Submit</button>
                    </div>
                </form>
                {error && <p className="error-message">{error}</p>}
            
            </fieldset>
        </div>
    );
}

export default ApLehonat;
