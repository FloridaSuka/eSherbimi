import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Participimet from './Participimet';

jest.mock('axios'); // Mock axios për të shmangur thirrjet reale të rrjetit

describe('Participimet component', () => {
  test('submits participation form with correct data', async () => {
    // Përcaktojmë të dhënat e simulimit
    const ref = '€ 100.00';
    const selectedOption = 'option1';
    const mockedResponse = { data: 'Participation submitted successfully' };

    // Përcaktojmë përgjigjen e simuluar të axios.post
    axios.post.mockResolvedValueOnce(mockedResponse);

    // Rendit komponentin me render()
    render(<Participimet />);

    // Gjej inputet në formën e pjesëmarrjes
    const refInput = screen.getByPlaceholderText('€ 100.00');
    const selectInput = screen.getByLabelText('Select an Option');

    // Plotëso inputet me të dhënat e simulimit
    fireEvent.change(refInput, { target: { value: ref } });
    fireEvent.change(selectInput, { target: { value: selectedOption } });

    // Presim për shfaqjen e butonit të dërgimit dhe e klikojmë atë
    const submitButton = screen.getByRole('button', { name: 'Paguaj' });
    fireEvent.click(submitButton);

    // Presim për shfaqjen e mesazhit të suksesit
    await waitFor(() => {
      expect(screen.getByText('Participation submitted successfully')).toBeInTheDocument();
    });

    // Verifikojmë se axios.post është thirrur me të dhënat e duhura
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/participations', {
      donationAmount: ref,
      option: selectedOption
    });
  });

  test('handles submission error', async () => {
    // Përcaktojmë përgjigjen e simuluar të axios.post për një gabim
    const errorResponse = { message: 'Error submitting participation' };
    axios.post.mockRejectedValueOnce(errorResponse);

    // Rendit komponentin me render()
    render(<Participimet />);

    // Kliko butonin e dërgimit
    const submitButton = screen.getByRole('button', { name: 'Paguaj' });
    fireEvent.click(submitButton);

    // Presim për shfaqjen e mesazhit të gabimit
    await waitFor(() => {
      expect(screen.getByText('Error submitting participation')).toBeInTheDocument();
    });
  });
});
