// AutoT.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AutoT from './AutoT';

test('renders AutoT component', () => {
  render(<AutoT />);
  const titleElement = screen.getByText(/Taksa komunale për regjistrim të automjetit personal/i);
  expect(titleElement).toBeInTheDocument();
});

test('submits form with correct values', () => {
  render(<AutoT />);
  
  // Fill form inputs
  fireEvent.click(screen.getByLabelText(/Veture/i));
  fireEvent.click(screen.getByLabelText(/Regjistrim i ri/i));
  fireEvent.click(screen.getByLabelText(/Gjakove/i));
  fireEvent.change(screen.getByLabelText(/Marka e automjetit/i), { target: { value: 'BMW' } });
  fireEvent.change(screen.getByLabelText(/Kapaciteti\/Fuqia Motorike\(CCM\):/i), { target: { value: 'Deri 3500cc (kubik)' } });

  // Submit form
  fireEvent.click(screen.getByText(/Shakrko urdherpagesen/i));

  // Verify form data
  expect(console.log).toHaveBeenCalledWith("veture", { english: true, maths: false }, "3", "BMW");
});
