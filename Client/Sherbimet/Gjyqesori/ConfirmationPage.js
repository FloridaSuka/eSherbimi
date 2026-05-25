// src/client/Sherbimet/Gjyqesori/ConfirmationPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './ConfirmationPage.css'; // Create this CSS file for styling

const ConfirmationPage = () => {
  const location = useLocation();
  const { selectedOption } = location.state || {};

  const handleConfirm = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/confirmation', { selectedOption });
      console.log('Confirmation saved:', response.data);
      alert('Information confirmed and saved');
    } catch (error) {
      console.error('Error saving confirmation:', error);
      alert('Error saving confirmation');
    }
  };

  return (
    <div className="confirmation-page-container">
      <h2>Confirm Your Information</h2>
      <p>Reason for certificate issuance: {selectedOption}</p>
      <button onClick={handleConfirm} className="confirm-button">Confirm</button>
    </div>
  );
};

export default ConfirmationPage;
