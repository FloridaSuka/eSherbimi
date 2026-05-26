// AutoP.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AutoP from './AutoP';

test('renders AutoP component', () => {
  render(<AutoP />);
  const titleElement = screen.getByText(/Kërkesë për targa me porosi nga pronari individual/i);
  expect(titleElement).toBeInTheDocument();
});

test('submits form with correct values', () => {
  render(<AutoP />);
  
  // Fill form inputs
  fireEvent.change(screen.getByLabelText(/Numri personal/i), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByLabelText(/Emri dhe mbiemri/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Qyteti/i), { target: { value: 'New York' } });
  fireEvent.change(screen.getByLabelText(/Adresa/i), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByLabelText(/Shkruani targat që do të rezervoni/i), { target: { value: 'GT123' } });
  fireEvent.change(screen.getByLabelText(/Data e skadimit të vlefshmërisë së porosisë/i), { target: { value: '18.07.2024' } });
  fireEvent.click(screen.getByLabelText(/Konfirmoj se kam lexuar/i));

  // Submit form
  fireEvent.click(screen.getByText(/Shkarko urdherpagesen/i));

  // Verify form data
  expect(console.log).toHaveBeenCalledWith("GT123", "1234567890", true, "John Doe", "New York", "123 Main St", "18.07.2024");
});
