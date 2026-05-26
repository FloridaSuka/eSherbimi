// ApFemije.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ApFemije from './ApFemije';

test('renders ApFemije component', () => {
  render(<ApFemije />);
  const headingElement = screen.getByText(/Aplikimi per shtestat per femije/i);
  expect(headingElement).toBeInTheDocument();
});

test('submits form with correct data', () => {
  render(<ApFemije />);
  
  // Fill form inputs
  fireEvent.change(screen.getByPlaceholderText(/Enter First Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Last Name/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter NrPersonal/i), { target: { value: '123456789' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Mobile number/i), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Address/i), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter NrXhirollogaris/i), { target: { value: '987654321' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter the data/i), { target: { value: 'Some data' } });
  fireEvent.change(screen.getByLabelText(/Select your choice/i), { target: { value: '1' } });

  fireEvent.click(screen.getByText(/Submit/i));

  // Verify form data
  expect(console.log).toHaveBeenCalledWith(
    "John",
    "Doe",
    "john@example.com",
    "123456789",
    "1234567890",
    "123 Main St",
    "987654321",
    "male",
    "",
    "",
    "",
    { english: true, maths: false, physics: false },
    "Some data",
    "",
    ""
  );
});
