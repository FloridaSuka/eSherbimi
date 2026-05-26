import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FaturaPer from './FaturaPer';

describe('FaturaPer component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<FaturaPer />);
    const titleElement = getByText(/Aplikimi per shtestat per lehonat/);
    expect(titleElement).toBeInTheDocument();
  });

  test('submitting the form triggers handleSubmit function', () => {
    const { getByText, getByLabelText } = render(<FaturaPer />);
    const submitButton = getByText(/Kerko/);

    // Fill in the form fields
    fireEvent.change(getByLabelText('First Name*'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name*'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('NrPersonal*'), { target: { value: '123456789' } });

    // Simulate button click
    fireEvent.click(submitButton);

    // Expect that handleSubmit function has been called
    expect(console.log).toHaveBeenCalledWith('John', 'Doe', '123456789');
  });
});
