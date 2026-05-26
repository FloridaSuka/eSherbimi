import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DokElektronike from './DokElektronike';

describe('DokElektronike component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<DokElektronike />);
    const titleElement = getByText(/Verifikimi i dokumenteve elektronike/);
    expect(titleElement).toBeInTheDocument();
  });

  test('submitting the form triggers handleSubmit function', () => {
    const { getByText, getByPlaceholderText } = render(<DokElektronike />);
    const submitButton = getByText(/Verifiko/);

    // Fill in the form field
    fireEvent.change(getByPlaceholderText('€ 100.00'), { target: { value: '12345' } });

    // Simulate button click
    fireEvent.click(submitButton);

    // Expect that handleSubmit function has been called
    expect(console.log).toHaveBeenCalledWith('12345');
  });
});
