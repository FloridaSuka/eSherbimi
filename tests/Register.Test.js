import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './Register';

const renderWithProviders = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <Router>{ui}</Router>,
    renderOptions
  );
};

test('validates the form fields correctly', async () => {
  renderWithProviders(<Register />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  const submitButton = screen.getByRole('button', { name: /sign up/i });

  fireEvent.change(usernameInput, { target: { value: 'a' } });
  fireEvent.blur(usernameInput);
  expect(await screen.findByText(/invalid entry/i)).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: 'validUser123' } });
  fireEvent.blur(usernameInput);
  expect(screen.queryByText(/invalid entry/i)).not.toBeInTheDocument();

  fireEvent.change(passwordInput, { target: { value: '123' } });
  fireEvent.blur(passwordInput);
  expect(await screen.findByText(/invalid entry/i)).toBeInTheDocument();

  fireEvent.change(passwordInput, { target: { value: 'ValidPass123!' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'ValidPass123!' } });
  fireEvent.blur(passwordInput);
  fireEvent.blur(confirmPasswordInput);
  expect(screen.queryByText(/invalid entry/i)).not.toBeInTheDocument();

  fireEvent.click(submitButton);
  expect(await screen.findByText(/no server response/i)).toBeInTheDocument();
});

test('displays error message on failed registration', async () => {
  renderWithProviders(<Register />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  const submitButton = screen.getByRole('button', { name: /sign up/i });

  fireEvent.change(usernameInput, { target: { value: 'existinguser' } });
  fireEvent.change(passwordInput, { target: { value: 'ValidPass123!' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'ValidPass123!' } });

  fireEvent.click(submitButton);

  expect(await screen.findByText(/username taken/i)).toBeInTheDocument();
});

test('redirects to /login on successful registration', async () => {
  const mockNavigate = jest.fn();
  jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

  renderWithProviders(<Register />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  const submitButton = screen.getByRole('button', { name: /sign up/i });

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'Password123!' } });

  fireEvent.click(submitButton);

  await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/login'));
});
