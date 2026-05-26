import { setupServer } from 'msw/node';
import { rest } from 'msw';
import '@testing-library/jest-dom';

// Definimi i serverit të msw me përgjigjet për endpoint-et '/login' dhe '/signup'
const server = setupServer(
  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body;
    if (username === 'testuser' && password === 'Password123!') {
      return res(ctx.status(200), ctx.json({ user: { username: 'testuser' } }));
    }
    return res(ctx.status(401), ctx.json({ message: 'Login failed' }));
  }),

  rest.post('/signup', (req, res, ctx) => {
    const { usernameR, passwordR } = req.body;
    if (usernameR === 'testuser' && passwordR === 'Password123!') {
      return res(ctx.status(200), ctx.json({ user: { username: 'testuser' } }));
    }
    if (usernameR === 'existinguser') {
      return res(ctx.status(409), ctx.json({ message: 'Username Taken' }));
    }
    return res(ctx.status(400), ctx.json({ message: 'Registration Failed' }));
  })
);

// Konfigurimi i hooks për msw server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
