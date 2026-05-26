import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Policia2 from './Policia2';

test('renders Policia2 component correctly', () => {
  const { getByText, getByPlaceholderText } = render(<Policia2 />);

  // Verifikojmë nëse titulli është i pranishëm
  expect(getByText('Kërkimi i gjobave individuale')).toBeInTheDocument();

  // Verifikojmë nëse inputi është i pranishëm dhe mund të ndryshohet
  const inputElement = getByPlaceholderText('Shkruaj këtu');
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: 'ABC123' } });
  expect(inputElement.value).toBe('ABC123');

  // Verifikojmë nëse butoni është i pranishëm
  const buttonElement = getByText('Kërko');
  expect(buttonElement).toBeInTheDocument();
});
