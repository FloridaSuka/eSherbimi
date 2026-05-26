// ApLehonat.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ApLehonat from './ApLehonat';

test('renders ApLehonat component', () => {
  render(<ApLehonat />);
  const headingElement = screen.getByText(/Application for Lehonat Benefits/i);
  expect(headingElement).toBeInTheDocument();
});

test('submits form with correct data', () => {
  render(<ApLehonat />);
  
  // Fill form inputs
  fireEvent.change(screen.getByPlaceholderText(/Enter First Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Last Name/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter NrPersonal/i), { target: { value: '123456789' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Mobile number/i), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Address/i), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter NrXhirollogaris/i), { target: { value: '987654321' } });

  fireEvent.click(screen.getByLabelText(/Yes/i));

  fireEvent.change(screen.getByPlaceholderText(/Enter the data/i), { target: { value: 'Some data' } });
  
  fireEvent.change(screen.getByLabelText(/Select your choice/i), { target: { value: '1' } });

  fireEvent.click(screen.getByLabelText(/Aprovoj/i));

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
    "Yes",
    "aprovoj",
    "",
    { english: true, maths: false, physics: false },
    "Some data",
    "",
    ""
  );
});
