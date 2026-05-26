// GjendjaCivile.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import GjendjaCivile from './GjendjaCivile';

test('renders GjendjaCivile component', () => {
  render(<GjendjaCivile />);
  const titleElement = screen.getByText(/Gjendja Civile/i);
  expect(titleElement).toBeInTheDocument();
});

test('navigates to login page if not logged in when clicking a link', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <GjendjaCivile />
    </Router>
  );

  fireEvent.click(screen.getByText(/Shkarko "Certifikaten e lindje"/i));
  expect(history.location.pathname).toBe('/Login');
});

test('navigates to specified page when clicking a link if logged in', () => {
  const history = createMemoryHistory();
  const isLoggedIn = true;
  render(
    <Router history={history}>
      <GjendjaCivile history={history} isLoggedIn={isLoggedIn} />
    </Router>
  );

  fireEvent.click(screen.getByText(/Shkarko "Certifikaten e lindje"/i));
  expect(history.location.pathname).toBe('/Certi');
});

test('displays alert message when clicking a link', () => {
  const history = createMemoryHistory();
  const isLoggedIn = false;
  render(
    <Router history={history}>
      <GjendjaCivile history={history} isLoggedIn={isLoggedIn} />
    </Router>
  );

  fireEvent.click(screen.getByText(/Shkarko "Certifikaten e lindje"/i));
  const alertMessageElement = screen.getByText(/Për shkarkimin e këtijë dokumenti/i);
  expect(alertMessageElement).toBeInTheDocument();
});
