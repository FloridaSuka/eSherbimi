import React from "react";
import './Prona1.css';

const Prona1 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const handleReset = () => {
        console.log("Form reset");
    };

    return (
        <div className="prona1-form-container">
            <h2>Aplikimi për vazhdim të licensës së vlerësuesve të pronave të paluajtshme</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className="prona1-form-wrapper"><br></br>
                    <h3>Informata të përgjithshme</h3>
                    <p className="prona1-instructions">
                        Për të realizuar aplikimin për vazhdim të licensës si vlerësues i pronave të paluajtshme ju duhet të realizoni hapat si vijon:
                    </p>
                    <ol className="prona1-instructions">
                        <li>Të realizoni pagesën në vlerë prej 50 EUR, përmes platformës e-Kosova duke përdorur Credit/Debit kartelën tuaj, pavarësisht klient i cilës bankë jeni.</li>
                        <li>Të plotësoni formularin, i cili shfaqet menjëherë pasi që pagesa të jetë realizuar me sukses.</li>
                        <li>Pasi që keni përfunduar aplikimin dhe lënda juaj të jetë trajtuar nga zyrtari përgjegjës, ju do të njoftoheni në mënyrë automatike përmes Email dhe SMS rreth statusit tuaj të aplikimit.</li>
                    </ol>
                    <p className="prona1-instructions">
                        Për të vazhduar tutje, ju lutem të klikoni mbi “Vazhdo” dhe për të anuluar klikoni “Anulo”.
                    </p>
                    <div className="prona1-button-container">
                        <button type="reset" onClick={handleReset} className="prona1-form-button">Anulo</button>
                        <button type="submit" className="prona1-form-button">Vazhdo</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Prona1;
