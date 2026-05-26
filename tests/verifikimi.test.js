// Verifikimi.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Verifikimi from './Verifikimi';

test('renders Verifikimi component', () => {
  render(<Verifikimi />);
  const titleElement = screen.getByText(/Verifiko Banderolat nga Agjencia e Kosovës për Produkte dhe Pajisje Medicinale/i);
  expect(titleElement).toBeInTheDocument();
});

test('submits form with correct values', () => {
  render(<Verifikimi />);
  
  // Fill form input
  fireEvent.change(screen.getByPlaceholderText(/Shkruaj ketu.../i), { target: { value: '12345' } });

  // Submit form
  fireEvent.click(screen.getByText(/Kerko/i));

  // Verify form data
  expect(console.log).toHaveBeenCalledWith("", "12345");
});
