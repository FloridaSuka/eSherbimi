const request = require('supertest');
const { createApp } = require('../src/app');
const { sequelize } = require('../src/models');

const app = createApp();

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

async function register(overrides = {}) {
  const payload = {
    tenantName: 'Komuna Test',
    tenantSlug: `komuna-test-${Math.random().toString(16).slice(2)}`,
    name: 'Admin User',
    email: `admin-${Date.now()}-${Math.random()}@example.com`,
    password: 'Password123!',
    role: 'admin',
    ...overrides
  };

  const res = await request(app).post('/api/auth/register').send(payload);
  return { payload, res, token: res.body.token };
}

test('registers, logs in and returns current user', async () => {
  const { payload, res } = await register();
  expect(res.status).toBe(201);
  expect(res.body.token).toBeTruthy();

  const login = await request(app).post('/api/auth/login').send({ email: payload.email, password: payload.password });
  expect(login.status).toBe(200);

  const me = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${login.body.token}`);
  expect(me.status).toBe(200);
  expect(me.body.email).toBe(payload.email);
});

test('creates, searches, updates and deletes a tenant-scoped service record', async () => {
  const { token } = await register();

  const created = await request(app)
    .post('/api/services/waterBills')
    .set('Authorization', `Bearer ${token}`)
    .send({ title: 'KRU bill May', referenceNo: 'KRU-001', amount: 19.5, metadata: { consumer: '123' } });

  expect(created.status).toBe(201);
  expect(created.body.title).toBe('KRU bill May');

  const search = await request(app)
    .get('/api/services/waterBills?q=KRU&status=submitted')
    .set('Authorization', `Bearer ${token}`);
  expect(search.status).toBe(200);
  expect(search.body.count).toBe(1);

  const updated = await request(app)
    .put(`/api/services/waterBills/${created.body.id}`)
    .set('Authorization', `Bearer ${token}`)
    .send({ status: 'paid' });
  expect(updated.status).toBe(200);
  expect(updated.body.status).toBe('paid');

  const deleted = await request(app)
    .delete(`/api/services/waterBills/${created.body.id}`)
    .set('Authorization', `Bearer ${token}`);
  expect(deleted.status).toBe(200);
});

test('blocks protected routes without a token', async () => {
  const res = await request(app).get('/api/services/citizens');
  expect(res.status).toBe(401);
});

test('queues AI chat as a background job', async () => {
  const { token } = await register();
  const res = await request(app)
    .post('/api/ai/chat')
    .set('Authorization', `Bearer ${token}`)
    .send({ message: 'How do I apply for a passport?' });

  expect(res.status).toBe(202);
  expect(res.body.name).toBe('ai.chat');
});
