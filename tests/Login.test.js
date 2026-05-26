// Login.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Login from './Login';

// Funksion për të mbështjellë komponentin me Router dhe AuthProvider
const renderWithProviders = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <Router>
      <AuthProvider {...providerProps}>{ui}</AuthProvider>
    </Router>,
    renderOptions
  );
};

// Testimi i validimit të formës
test('validates the form fields correctly', async () => {
  renderWithProviders(<Login />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);

  // Testimi i validimit të username
  fireEvent.change(usernameInput, { target: { value: 'a' } });
  fireEvent.blur(usernameInput);
  expect(await screen.findByText(/invalid username format/i)).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: 'validUser123' } });
  fireEvent.blur(usernameInput);
  expect(screen.queryByText(/invalid username format/i)).not.toBeInTheDocument();

  // Testimi i validimit të password
  fireEvent.change(passwordInput, { target: { value: '123' } });
  fireEvent.blur(passwordInput);
  expect(await screen.findByText(/invalid password format/i)).toBeInTheDocument();

  fireEvent.change(passwordInput, { target: { value: 'ValidPass123!' } });
  fireEvent.blur(passwordInput);
  expect(screen.queryByText(/invalid password format/i)).not.toBeInTheDocument();
});

// Testimi i ndërveprimeve të përdoruesit
test('displays error message on failed login', async () => {
  renderWithProviders(<Login />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });

  // Vendosim vlera të gabuara për login
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'WrongPass123!' } });

  fireEvent.click(submitButton);

  // Prisni që mesazhi i gabimit të shfaqet
  expect(await screen.findByText(/login failed/i)).toBeInTheDocument();
});

// Testimi i kërkesave API dhe ridrejtimi pas login të suksesshëm
test('redirects to /Sherbime on successful login', async () => {
  const mockNavigate = jest.fn();
  jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

  renderWithProviders(<Login />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });

  // Vendosim vlera të sakta për login
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'Password123!' } });

  fireEvent.click(submitButton);

  // Prisni që navigimi të ndodhë
  await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/Sherbime'));
});
