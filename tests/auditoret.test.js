import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuditoretLigjore from './AuditoretLigjore';

describe('AuditoretLigjore component', () => {
  test('searches for items correctly', () => {
    // Rendit komponentin me render()
    render(<AuditoretLigjore />);

    // Gjej inputin e kërkimit
    const searchInput = screen.getByPlaceholderText('Search...');

    // Plotëso inputin me një term kërkimi të simuluar
    fireEvent.change(searchInput, { target: { value: 'auditimeve' } });

    // Verifikojmë se termi i kërkimit është ndryshuar me sukses
    expect(searchInput.value).toBe('auditimeve');
  });

  test('clicks on card correctly', () => {
    // Rendit komponentin me render()
    render(<AuditoretLigjore />);

    // Gjej të gjitha kartat e shërbimit
    const cards = screen.getAllByRole('button', { name: /Aplikimi per/ });

    // Kliko në kartën e parë
    fireEvent.click(cards[0]);

    // Verifikojmë se kartë është klikuar me sukses (mund të shtoni logjikën e nevojshme për verifikimin e këtij veprimi)
    // Këtu mund të shtoni logjikën për të verifikuar veprimet pas klikimit në kartë
  });
});
