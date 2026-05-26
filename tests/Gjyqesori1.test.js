// Gjyqesori1.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gjyqesori1 from './Gjyqesori1';

test('renders Gjyqesori1 component', () => {
  render(<Gjyqesori1 />);
  const titleElement = screen.getByText(/Certifikata mbi dënimet penale/i);
  expect(titleElement).toBeInTheDocument();
});

test('submits form with selected option', () => {
  render(<Gjyqesori1 />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Region1' } });
  fireEvent.click(screen.getByText(/Vazhdo/i));

  // Add your form submission logic here
});
