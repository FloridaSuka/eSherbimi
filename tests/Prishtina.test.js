// Prishtina.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Prishtina from './Prishtina';

test('renders Prishtina component', () => {
  render(<Prishtina />);
  const paragraphElement = screen.getByText(/Regjistri i procedurave administrative për Komunën e Prizrenit/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('submits form with correct search term', () => {
  render(<Prishtina />);
  
  // Fill form input
  fireEvent.change(screen.getByPlaceholderText(/Shkruaj ketu.../i), { target: { value: 'Drejtorine e Financave' } });

  // Submit form
  fireEvent.click(screen.getByText(/Kerko/i));

  // Verify form data
  expect(console.log).toHaveBeenCalledWith("Search term:", "Drejtorine e Financave");
});
