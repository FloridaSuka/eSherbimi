import React from 'react';
import { render } from '@testing-library/react';
import Policia1 from './Policia1';

test('renders Policia1 component correctly', () => {
  const { getByText } = render(<Policia1 />);

  // Verifikojmë nëse mesazhi është i pranishëm
  expect(getByText('Nuk është identifikuar asnjë gjobë sipas numrit tuaj personal. Nëse keni gjobë aktive të pa paguar, ju lusim të prisni derisa Policia e Kosovës të bëjë regjistrimin e saj.')).toBeInTheDocument();
});
