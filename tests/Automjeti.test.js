// Automjeti.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Automjeti from './Automjeti';

test('renders Automjeti component', () => {
  render(<Automjeti />);
  const titleElement = screen.getByText(/Automjeti/i);
  expect(titleElement).toBeInTheDocument();
});
