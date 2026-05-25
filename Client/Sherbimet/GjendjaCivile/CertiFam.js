import React, { useState } from "react";
import axios from 'axios';
import './CertiFam.css';

function CertiFam() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedOption);
    try {
      const response = await axios.post('http://localhost:3001/api/certi-fam', {
        document_type: selectedOption,
        description: "Example Description"
      });
      const { data } = response.data;

      const downloadResponse = await axios.get(`http://localhost:3001/api/certi-fam/${data.id}/download`, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([downloadResponse.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `CertiFam_${data.id}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="Custom-form-container">
      <h1>Shkarko "Certifikatën e lindjes" për anëtar të familjes</h1>
      <fieldset className="Custom-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="Custom-left-column">
            <p className="Custom-para"><b>Certifikat e lindjes</b></p>
            <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="Custom-form-input">
              <option value="" disabled>Zgjedh anetarin</option>
              <option value="Prindi">Prindi</option>
              <option value="Motra">Motra</option>
              <option value="Vellau">Vellau</option>
              <option value="Te tjera">Te tjera</option>
            </select>
            <p className="Custom-para">Nëse ndonjëri nga anëtarët tuaj të familjës nuk paraqitet në listë ju lutemi të drejtoheni në zyrat e gjendjes civile pranë komunës tuaj për përditësimin e të dhënave.</p>
          </div>

          <div className="Custom-button-container">
            <button type="submit" value="Submit" className="Custom-form-button">Submit</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default CertiFam;
