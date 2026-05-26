// Kru.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Kru from './Kru';
import axios from 'axios';

jest.mock('axios');

const mockBill = {
  consumer_number: '123456',
  name: 'John Doe',
  address: '123 Main St',
  price: '$100',
};

test('renders Kru component', () => {
  render(<Kru />);
  const titleElement = screen.getByText(/KRU Hidrodrini - Shiko dhe paguaj faturat e ujit/i);
  expect(titleElement).toBeInTheDocument();
});

test('submits form and displays bill details', async () => {
  axios.get.mockResolvedValue({ data: mockBill });
  render(<Kru />);

  fireEvent.change(screen.getByPlaceholderText(/Shkruaj këtu/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/Kërko/i));

  await waitFor(() => {
    expect(screen.getByText(/Bill Details:/i)).toBeInTheDocument();
    expect(screen.getByText(/Consumer Number:/i)).toBeInTheDocument();
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Address:/i)).toBeInTheDocument();
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
  });
});

test('displays error alert if bill not found', async () => {
  axios.get.mockRejectedValue({ response: { status: 404 } });
  render(<Kru />);

  fireEvent.change(screen.getByPlaceholderText(/Shkruaj këtu/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/Kërko/i));

  await waitFor(() => {
    expect(screen.getByText(/Bill not found/i)).toBeInTheDocument();
  });
});

test('displays generic error alert if error fetching bill', async () => {
  axios.get.mockRejectedValue({ response: { status: 500 } });
  render(<Kru />);

  fireEvent.change(screen.getByPlaceholderText(/Shkruaj këtu/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/Kërko/i));

  await waitFor(() => {
    expect(screen.getByText(/Error fetching the bill/i)).toBeInTheDocument();
  });
});

test('displays modal on link click', () => {
  render(<Kru />);

  fireEvent.click(screen.getByText(/Ku mund ta gjej shifrën e konsumatorit\?/i));

  expect(screen.getByAltText(/Shifra e konsumatorit/i)).toBeInTheDocument();
});
