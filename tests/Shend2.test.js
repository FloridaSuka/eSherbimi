import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Shend2 from './Shend2';

// Mocking axios post method
jest.mock('axios');

describe('Shend2 component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Shend2 />);
    const titleElement = getByText(/Kërkesë për ndryshimin e mjekut familjar për persona tjerë/);
    expect(titleElement).toBeInTheDocument();
  });

  test('submitting the form triggers handleSubmit function', async () => {
    const { getByText, getByLabelText } = render(<Shend2 />);
    const submitButton = getByText(/Regjistro kerkesen/);

    fireEvent.change(getByLabelText('Lloji i Kerkeses'), { target: { value: '1' } });
    fireEvent.change(getByLabelText('Institucioni shendetesor'), { target: { value: '1' } });
    fireEvent.change(getByLabelText('Arsyeja e kerkeses'), { target: { value: '1' } });
    fireEvent.change(getByLabelText('Mjeku Familjar'), { target: { value: 'Emri i mjekut të zgjedhur' } });
    fireEvent.click(getByLabelText('Pjatohem'));

    fireEvent.click(submitButton);

    // Expect axios.post to have been called with the correct data
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/family-doctor-requests', {
        request_type: '1',
        health_institution: '1',
        request_reason: '1',
        family_doctor: 'Emri i mjekut të zgjedhur',
        consent: true
      });
    });

    // Simulate success response
    axios.post.mockResolvedValueOnce({ data: 'Success' });

    // Expect success message
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Kërkesa u regjistrua me sukses!');
    });
  });

  // Add more tests as needed
});
