// Kesco.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Kesco from './Kesco';

test('renders Kesco component', () => {
  render(<Kesco />);
  const titleElement = screen.getByText(/KESCO - Shiko dhe paguaj faturat e energjisë elektrike/i);
  expect(titleElement).toBeInTheDocument();
});

test('submits form with selected option and reference', () => {
  render(<Kesco />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Region1' } });
  fireEvent.change(screen.getByPlaceholderText(/Shkruaj këtu/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/Kërko/i));

  // Add your form submission logic here
});

test('displays modal on link click', () => {
  render(<Kesco />);

  fireEvent.click(screen.getByText(/Ku mund ta gjej shifrën e konsumatorit\?/i));

  expect(screen.getByText(/Shifra e konsumatorit/i)).toBeInTheDocument();
});
