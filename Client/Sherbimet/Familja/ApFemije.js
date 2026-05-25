import React, { useState } from "react";
import axios from 'axios';
import './ApFemije.css';

function ApFemije() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nrPersonal, setNrPersonal] = useState("");
    const [contact, setContact] = useState("");
    const [adresa, setAdresa] = useState("");
    const [nrXhiro, setNrXhiro] = useState("");
    const [gender, setGender] = useState("male");
    const [aprovoj, setAprovoj] = useState(false);
    const [che, setChe] = useState("");
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post('http://localhost:3001/api/ap_femije', {
                firstName, lastName, email, nrPersonal, contact, adresa, nrXhiro, gender,
                aprovoj, che, 
                resume, url, selectedOption, about
            });
            console.log('Data saved:', response.data);
            alert('Data saved successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Error submitting form');
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
        setAprovoj(false);
        setChe("");
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="FormContainer">
            <h1>Aplikimi per shtestat per femije</h1>
            <fieldset className="FormWrapper">
                <form onSubmit={handleSubmit}>
                    <div className="LeftColumn">
                        <h4>Te dhenat e prindrit</h4>
                        <label htmlFor="firstname">First Name*</label>
                        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required className="FormInput" />

                        <label htmlFor="lastname">Last Name*</label>
                        <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required className="FormInput" />

                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required className="FormInput" />

                        <label htmlFor="nrpersonal">NrPersonal*</label>
                        <input type="text" name="nrpersonal" id="nrpersonal" value={nrPersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder="Enter NrPersonal" required className="FormInput" />

                        <label htmlFor="contact">Contact*</label>
                        <input type="text" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact" required className="FormInput" />

                        <label htmlFor="adresa">Adresa*</label>
                        <input type="text" name="adresa" id="adresa" value={adresa} onChange={(e) => setAdresa(e.target.value)} placeholder="Enter Adresa" required className="FormInput" />

                        <label htmlFor="nrXhiro">NrXhirollogaris*</label>
                        <input type="text" name="nrXhiro" id="nrXhiro" value={nrXhiro} onChange={(e) => setNrXhiro(e.target.value)} placeholder="Enter NrXhirollogaris" required className="FormInput" />

                        <label htmlFor="gender">Gender*</label>
                        <div className="GenderOptions">
                            <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} className="FormInput" />
                            <label htmlFor="male">Male</label>

                            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} className="FormInput" />
                            <label htmlFor="female">Female</label>

                            <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} className="FormInput" />
                            <label htmlFor="other">Other</label>
                        </div>

                        <label htmlFor="isEmployed">Are you employed?</label>
                        <div className="isEmployedOptions">
                            <input type="radio" name="isEmployed" value="Yes" id="Yes" checked={che === "Yes"} onChange={(e) => setChe(e.target.value)} className="FormInput" />
                            <label htmlFor="Yes">Yes</label>

                            <input type="radio" name="isEmployed" value="No" id="No" checked={che === "No"} onChange={(e) => setChe(e.target.value)} className="FormInput" />
                            <label htmlFor="No">No</label>
                        </div>
                    </div>

                    <div className="RightColumn">
                        <h4>Të dhënat e fëmijës</h4>

                        <label htmlFor="nrfoshnjes">NrPersonal i foshnjes*</label>
                        <input type="text" name="nrfoshnjes" id="nrfoshnjes" value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Enter NrPersonal i foshnjes" required className="FormInput" />

                        <label htmlFor="select">Select your choice</label>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="FormInput">
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
                    <div className="SubjectOptions">
                        <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj} onChange={(e) => setAprovoj(e.target.checked)} className="FormInput" />
                        <label htmlFor="aprovoj">Aprovoj</label>
                    </div>

                    <div className="ButtonContainer">
                        <button type="reset" value="reset" onClick={handleReset} className="FormButton">Reset</button>
                        <button type="submit" value="Submit" className="FormButton">Submit</button>
                    </div>
                </form>
                {error && <p className="errorMessage">{error}</p>}
            </fieldset>
        </div>
    );
}

export default ApFemije;
