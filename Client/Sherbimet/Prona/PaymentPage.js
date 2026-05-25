import React, { useState } from 'react';
import './PaymentPage.css'; // Create this CSS file to style your payment form
import axios from 'axios';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/[^0-9/]/g, ''); // Allow only numbers and /
    setExpiryDate(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCvv(value);
  };

  const handleCardHolderNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
    setCardHolderName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16) {
      alert('Card number must be 16 digits');
      return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      alert('Expiry date must be in MM/YY format');
      return;
    }

    if (cvv.length < 3 || cvv.length > 4) {
      alert('CVV must be 3 or 4 digits');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/payments', {
        cardHolderName,
        cardNumber,
        expiryDate,
        cvv
      });
      console.log('Payment submitted', response.data);
      alert('Payment submitted');
    } catch (error) {
      console.error('Error submitting payment', error);
      alert('Error submitting payment');
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardHolderName">Card Holder Name</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="5"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            maxLength="4"
            required
          />
        </div>
        <button type="submit" className="payment-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
