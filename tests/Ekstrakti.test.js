// Ekstrakti.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Ekstrakti from './Ekstrakti';

test('clicking download button triggers download', () => {
  render(<Ekstrakti />);
  
  // Kliko butonin "Shkarko"
  fireEvent.click(screen.getByText(/Shkarko/i));

  // Kontrollo nëse ka thirrur funksionin për shkarkim
  expect(console.log).toHaveBeenCalledWith("Download triggered");
});
