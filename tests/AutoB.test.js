import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AutoB from './AutoB';

test('submitting form with valid data', () => {
  render(<AutoB />);
  
  // Simulimi i të dhënave të përdoruesit në formë
  fireEvent.change(screen.getByLabelText('Numri personal:'), { target: { value: '123456789' } });
  fireEvent.change(screen.getByLabelText('Targat e automjetit:'), { target: { value: 'KS' } });
  fireEvent.change(screen.getByLabelText('Komuna:'), { target: { value: 'Prishtin' } });
  fireEvent.change(screen.getByLabelText('Marka e automjetit:'), { target: { value: 'Toyota' } });
  fireEvent.change(screen.getByLabelText('Kapaciteti/Fuqia Motorike (CCM): (CCM):'), { target: { value: 'upTo3500' } });

  // Verifikimi i ndryshimeve në inputet e formës
  expect(screen.getByLabelText('Numri personal:')).toHaveValue('123456789');
  expect(screen.getByLabelText('Targat e automjetit:')).toHaveValue('KS');
  expect(screen.getByLabelText('Komuna:')).toHaveValue('Prishtin');
  expect(screen.getByLabelText('Marka e automjetit:')).toHaveValue('Toyota');
  expect(screen.getByLabelText('Kapaciteti/Fuqia Motorike (CCM): (CCM):')).toHaveValue('upTo3500');

  // Emulimi i dërgimit të formës
  fireEvent.click(screen.getByText('Shkarko urdherpagesen'));

  // Verifikimi i dërgimit të formës
  expect(screen.getByText('Form submitted successfully!')).toBeInTheDocument();
});
