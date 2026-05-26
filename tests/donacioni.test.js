// donacioni.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Donacioni from './Donacioni';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Test unitar për formën e donacionit
test('submits form with correct data', () => {
  render(<Donacioni />);
  
  // Mbushni input-in për shumën e donacionit
  fireEvent.change(screen.getByPlaceholderText(/Shkruaj këtu/i), { target: { value: '100' } });

  // Përçoni formën
  fireEvent.click(screen.getByText(/Dhuro/i));

  // Kontrolloni nëse kërkesa për API është thirrur me të dhënat e duhura
  expect(console.log).toHaveBeenCalledWith(
    "",
    "100"
  );
});

// Testimi i integritetit për thirrjet e API-së
test('submits donation with correct data to API', async () => {
  // Konfiguroni mock adapterin për axios
  const mock = new MockAdapter(axios);

  // Përcaktoni të dhëna të pritshme të kërkesës
  const requestData = { amount: '100' };
  const responseData = { success: true };

  // Përcaktoni nënshtrimin e pritshëm të kërkesës
  mock.onPost('/donate', requestData).reply(200, responseData);

  // Mbushni input-in për shumën e donacionit
  render(<Donacioni />);
  fireEvent.change(screen.getByPlaceholderText(/Shkruaj këtu/i), { target: { value: '100' } });

  // Përçoni formën
  fireEvent.click(screen.getByText(/Dhuro/i));

  // Pritni për përfundimin e kërkesës së API-së
  await screen.findByText(/transaksioni është kryer me sukses/i);

  // Kontrolloni nëse kërkesa për API është thirrur me sukses
  expect(screen.getByText(/transaksioni është kryer me sukses/i)).toBeInTheDocument();
});
