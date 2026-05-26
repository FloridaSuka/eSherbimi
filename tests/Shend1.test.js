import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Shend1 from './Shend1';

describe('Shend1 component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Shend1 />);
    const titleElement = getByText(/Kërkesë për përzgjedhjen e mjekut familjar për persona tjerë/);
    expect(titleElement).toBeInTheDocument();
  });

  test('clicking the submit button triggers handleSubmit function', () => {
    const { getByText } = render(<Shend1 />);
    const submitButton = getByText(/Regjistro kerkesen/);
    fireEvent.click(submitButton);
    // Add more assertions based on the expected behavior
  });
});
