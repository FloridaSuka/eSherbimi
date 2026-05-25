import React from "react";
import './Ekstrakti.css';

function Ekstrakti() {


    return (
        <div className="Custom-form-container">
            <h1>Shkarko "Ekstraktin"</h1>
            <fieldset className="Custom-form-wrapper">
                <form>
                    <div className="Custom-left-col">
                        <h4>Ekstrakti nga regjistri qendror i gjendjes civile</h4>
            
                        <p className="Custom-para"><b>Vemendje:</b><br/>
                        Dokumenti që keni shkarkuar është nënshkruar në formë elektronike dhe është ekuivalente me dokumentet fizike që lëshohen nga zyrat e gjendjes civile pranë komunës tuaj.
                        Pasi të klikoni mbi "Shkarko" dokumenti do të shkarkohet në pajisjen tuaj në formatin PDF.
                        </p>
                    </div>
                    <div className="Custom-btn-container">
                        <button type="submit" value="Submit" className="Custom-form-btn">Shkarko</button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default Ekstrakti;
