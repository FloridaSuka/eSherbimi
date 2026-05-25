import React, { useState } from "react";
import './Shend2.css';
import axios from 'axios';

function Shend2() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [selectedOption4, setSelectedOption4] = useState("");
    const [aprovoj, setAprovoj] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();  // Prevent page refresh
    
        const formData = {
            request_type: selectedOption1,
            health_institution: selectedOption2,
            request_reason: selectedOption3,
            family_doctor: selectedOption4, // Use selectedOption4
            consent: aprovoj
        };
    
        try {
            const response = await axios.post('http://localhost:3001/api/family-doctor-requests', formData);
            console.log('Kërkesa u regjistrua me sukses:', response.data);
            alert('Kërkesa u regjistrua me sukses!');
        } catch (error) {
            console.error('Gabim në dërgimin e të dhënave:', error);
            alert(`Gabim në dërgimin e të dhënave: ${error.message}`);
        }
    }

    return (
        <div>
            <h3>Kërkesë për ndryshimin e mjekut familjar për persona tjerë</h3>
            <div className="Vem">
                <h3 className="vem">VËMENDJE</h3>
                <p className="para"> - Ju lutemi që të përzgjedhni QMF-në më të afërt me adresën e personit për të cilin po aplikoni. Adresa e cila do të merret për bazë është ajo që personi që po aplikoni e ka deklaruar në zyrat e Gjendjes Civile pranë komunës. Në rast se personi që po aplikoni ka ndryshuar vendbanim apo adresë, atëherë ai/ajo duhet të drejtohet në zyrën e Gjendjes Civile pranë komunës për të përditësuar të dhënat.
                <br/>- Në rast se përzgjedhni QMF-në e cila nuk është QMF më e afërt me adresën e personit për të cilin po aplikoni, atëherë aplikimi mund të rezultojë me refuzim dhe rrjedhimisht kërkesa duhet të realizohet nga fillimi.
                <br/>- Në rast se tek anëtarët e familjes nuk shfaqen të gjithë anëtarët, atëherë ju lutemi që të drejtoheni në zyrën e Gjendjes Civile pranë komunës tuaj për të përditësuar të dhënat apo mund të vazhdoni duke zgjedhur opsionin "Tjetër" tek lloji i kërkesës dhe të vendosni numrin personal të anëtarit të familjes.</p>
            </div>
            <div className="App-form-container">
                <fieldset className="App-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label>Lloji i Kerkeses</label>
                            <select name="select1" value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className="App-form-input">
                                <option value="" disabled>Aplikim per anetaret e familjes</option>
                                <option value="Prindi">Prindi</option>
                                <option value="Motra">Motra</option>
                            </select>
                            <label>Institucioni shendetesor</label>
                            <select name="select2" value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="QKUK">QKUK</option>
                                <option value="Shtepia e shendetit">Shtepia e shendetit</option>
                            </select>
                            <label>Arsyeja e kerkeses</label>
                            <select name="select3" value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="Kontroll">Kontroll</option>
                                <option value="Anailza">Analiza</option>
                            </select>
                            <p className="para">Të dhënat mbi anëtarët tuaj të familjes nuk kanë arritur të azhurohen nga Gjendja Civile.</p>
                            <label>Mjeku Familjar</label>
                            <select name="select4" value={selectedOption4} onChange={(e) => setSelectedOption4(e.target.value)} className="App-form-input">
                                <option value="" disabled>Zgjedh nje opsion</option>
                                <option value="Filan Fiskteku">Filan Fiskteku</option>
                                <option value="Fistek Filani">Fistek Filani</option>
                            </select>
                            <p className="para">Pajtohem dhe jap leje që Ministria e Shëndetësisë t'i shfrytëzojnë të dhënat e mia për qëllime të brendshme, në përputhshmëri me ligjet dhe rregulloret e Republikës së Kosovës. Sipas Kodit Penal të Republikës së Kosovës, Neni 391 – Deklarimi i rremë nën betim "1. 
                            Kushdo që pasi të ketë dhënë betimin pranë organit kompetent për të administruar dëshmitë e dhëna nën betim ose betimet dhe pastaj nënshkruan dëshminë nën betim ose deklaron diç që nuk beson se është e vërtetë ose me dijeni fsheh ose shmang nga deklarimi ndonjë çështje relevante për procedurën, dënohet me gjobë ose me burgim deri në tre (3) vjet."</p>
                            <div className="subject-options">
                                <input type="checkbox" name="aprovoj" value="aprovoj" id="aprovoj" checked={aprovoj} onChange={(e) => setAprovoj(e.target.checked)} className="App-form-input" />
                                <label htmlFor="aprovoj">Pjatohem</label>
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" value="Submit" className="App-form-button">Regjistro kerkesen</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default Shend2;
