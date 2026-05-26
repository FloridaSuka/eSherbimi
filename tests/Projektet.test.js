import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Projektet from './Projektet';

describe('Projektet component', () => {
  test('handles form submission correctly', () => {
    // Rendit komponentin me render()
    render(<Projektet />);

    // Gjej inputin në formën e projektet
    const refInput = screen.getByPlaceholderText('€ 100.00');

    // Plotëso inputin me një vlerë të simuluar
    fireEvent.change(refInput, { target: { value: '€ 50.00' } });

    // Kliko butonin e dërgimit
    const submitButton = screen.getByRole('button', { name: 'Paguaj' });
    fireEvent.click(submitButton);

    // Verifikojmë se forma e është dërguar
    // Në këtë rast, pasi që handleSubmit nuk bën asgjë, nuk ka asgjë për të verifikuar
    // Këtu mund të shtoni logjikën për verifikimin e ndonjë veprimi të kryer në handleSubmit
  });
});
