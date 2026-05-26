import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Shend3 from './Shend3';

describe('Shend3 component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Shend3 />);
    const titleElement = getByText(/Pasaporta Elektronike e Vaksinimit/);
    expect(titleElement).toBeInTheDocument();
  });

  test('submitting the form triggers handleSubmit function', () => {
    const { getByText, getByLabelText } = render(<Shend3 />);
    const submitButton = getByText(/Shkarko certifikaten digjitale/);

    // Simulate checkbox click
    fireEvent.click(getByLabelText('Pjatohem'));

    // Simulate button click
    fireEvent.click(submitButton);

    // Expect that handleSubmit function has been called
    expect(console.log).toHaveBeenCalledWith('Form submitted');
  });

  test('downloading the certificate triggers handleDownloadCertificate function', () => {
    const { getByText } = render(<Shend3 />);
    const downloadButton = getByText(/Shkarko certifikaten digjitale/);

    // Simulate button click
    fireEvent.click(downloadButton);

    // Expect that handleDownloadCertificate function has been called
    expect(console.log).toHaveBeenCalledWith('Certificate downloaded');
  });
});
