import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Kon from './Kon';

test('renders Kon component correctly', () => {
  const { getByText, getByLabelText } = render(<Kon />);

  // Verifikojmë nëse elementët e rëndësishëm janë renditur siç duhet në faqe
  expect(getByText('Pasqyra e kursimeve pensionale')).toBeInTheDocument();
  expect(getByText('Periudha e raportimit:')).toBeInTheDocument();
  expect(getByText('Viti i fundit')).toBeInTheDocument();
  expect(getByText('Nga fillimi')).toBeInTheDocument();
  expect(getByText('Autorizoj Fondin e Kursimeve Pensionale të Kosovës që të përdorë numrin personal, numrin e telefonit dhe emailin tim për ngritje të cilësisë së shërbimit për kontribuuesit.')).toBeInTheDocument();
  expect(getByLabelText('approve')).toBeInTheDocument();
  expect(getByText('Shkarko')).toBeInTheDocument();
});

test('handles form submission correctly', () => {
  const { getByText, getByLabelText } = render(<Kon />);

  // Simulojmë zgjedhjen e periudhës së raportimit
  fireEvent.click(getByText('Viti i fundit'));

  // Simulojmë zgjedhjen e autorizimit
  fireEvent.click(getByLabelText('approve'));

  // Simulojmë klikimin e butonit për të dërguar formën
  fireEvent.click(getByText('Shkarko'));

  // Këtu mund të shtoni asertione për logjikën e dërgimit të formës nëse është e nevojshme
});
