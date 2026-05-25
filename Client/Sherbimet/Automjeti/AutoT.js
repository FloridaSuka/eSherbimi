import React, { useState } from "react";
import axios from 'axios';
import './AutoT.css';

const AutoT = () => {
  const [auto, setAuto] = useState("");
  const [subjects, setSubjects] = useState({
    Regjistrim: false,
    Ndryshimpronari: false,
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [resume, setResume] = useState("");
  const [motorCcm, setMotorCcm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      autoTipi: auto,
      regjistrimiRi: subjects.Regjistrim,
      ndryshimiPronarit: subjects.Ndryshimpronari,
      komuna: selectedOption,
      marka: resume,
      motorCcm: motorCcm
    };

    try {
      const response = await axios.post('http://localhost:3001/api/auto-regjistrim', formData, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `AutoRegjistrim.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      alert('Data saved and PDF downloaded successfully');
    } catch (error) {
      console.error('Error saving data and downloading PDF:', error);
      alert('Error saving data and downloading PDF');
    }
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  return (
    <div className="form-container">
      <h1>Taksa komunale për regjistrim të automjetit personal</h1>
      <fieldset className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="column-left">
            <label htmlFor="auto">Zgjedh tipin e automjetit</label>
            <div className="auto-options">
              <input type="radio" name="auto" value="veture" id="veture" checked={auto === "veture"} onChange={(e) => setAuto(e.target.value)} className="form-input" />
              <label htmlFor="veture">Veture</label>

              <input type="radio" name="auto" value="mot" id="mot" checked={auto === "mot"} onChange={(e) => setAuto(e.target.value)} className="form-input" />
              <label htmlFor="mot">Motiçiklete</label>

              <input type="radio" name="auto" value="bus" id="bus" checked={auto === "bus"} onChange={(e) => setAuto(e.target.value)} className="form-input" />
              <label htmlFor="bus">Autobus</label>
            </div>
          </div>

          <div className="column-right">
            <div className="registration-options">
              <input type="checkbox" name="registration" id="Regjistrim" checked={subjects.Regjistrim} onChange={() => handleSubjectChange("Regjistrim")} className="form-input" />
              <label htmlFor="Regjistrim">Regjistrim i ri</label>

              <input type="checkbox" name="registration" id="Ndryshimpronari" checked={subjects.Ndryshimpronari} onChange={() => handleSubjectChange("Ndryshimpronari")} className="form-input" />
              <label htmlFor="Ndryshimpronari">Ndryshim pronari</label>
            </div>

            <label htmlFor="select">Komuna</label>
            <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-input">
              <option value="" disabled>Zgjedh Komunen</option>
              <option value="Prishtin">Prishtin</option>
              <option value="Gjilan">Gjilan</option>
              <option value="Gjakove">Gjakove</option>
              <option value="Peje">Peje</option>
              <option value="Ferizaj">Ferizaj</option>
              <option value="Mitrovice">Mitrovice</option>
              <option value="Te tjera">Te tjera</option>
            </select>

            <label htmlFor="file">Marka e automjetit:</label>
            <input type="text" name="file" value={resume} onChange={(e) => setResume(e.target.value)} className="form-input" />

            <label htmlFor="motorCcm">Kapaciteti/Fuqia Motorike(CCM):</label>
            <select name="motorCcm" id="motorCcm" value={motorCcm} onChange={(e) => setMotorCcm(e.target.value)} className="form-input">
              <option value="" disabled>Zgjedh nje opsion</option>
              <option value="Deri 3500cc (kubik)">Deri 3500cc (kubik)</option>
              <option value="Mbi 3500cc (kubik)">Mbi 3500cc (kubik)</option>
            </select>
          </div>
          <div className="Button-container">
            <button type="submit" value="Submit" className="Form-button">Shkarko urdherpagesen</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default AutoT;
