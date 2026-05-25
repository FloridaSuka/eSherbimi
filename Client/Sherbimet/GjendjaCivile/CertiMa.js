import React, { useState } from "react";
import './CertiMa.css';

function CertiMa() {

    const [selectedOption, setSelectedOption] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption);
        // Add your form submission logic here
    };

    return (
        <div className="Custom-form-container">
            <h1>Shkarko "Certifikatën e martesës" për anëtar të familjes</h1>
            <fieldset className="Custom-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="Custom-left-col">
                        <p className="Custom-para"><b>Certifikata e martesës</b></p>
                        <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="Custom-form-input">
                            <option value="" disabled>Zgjedh anetarin</option>
                            <option value="1">Prindi</option>
                            <option value="t">Te tjera</option>
                        </select>

                        <p className="Custom-para">Nëse ndonjëri nga anëtarët tuaj të familjës nuk paraqitet në listë ju lutemi të drejtoheni në zyrat e gjendjes civile pranë komunës tuaj për përditësimin e të dhënave.</p>
            
                        <p className="Custom-para"><b>Vemendje:</b><br/>
                        Dokumenti që keni shkarkuar është nënshkruar në formë elektronike dhe është ekuivalente me dokumentet fizike që lëshohen nga zyrat e gjendjes civile pranë komunës tuaj.
                        
                        Pasi të klikoni mbi "Shkarko" dokumenti do të shkarkohet në pajisjen tuaj në formatin PDF.
                        </p>
                    </div>
                    <div className="Custom-btn-container">
                        <button type="submit" value="Submit" className="Custom-form-button">Shkarko</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default CertiMa;
