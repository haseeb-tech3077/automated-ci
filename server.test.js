const request = require('supertest');
const app = require('./server');

describe('Calculator API', () => {
  test('Must add two numbers', async () => {
    const res = await request(app).get('/add?a=5&b=3');
    expect(res.body.result).toBe(8);
  });

  test('Must subtract two numbers', async () => {
    const res = await request(app).get('/subtract?a=5&b=3');
    expect(res.body.result).toBe(2);
  });

  test('Must multiply two numbers', async () => {
    const res = await request(app).get('/multiply?a=5&b=3');
    expect(res.body.result).toBe(15);
  });

  test('Must divide two numbers', async () => {
    const res = await request(app).get('/divide?a=6&b=2');
    expect(res.body.result).toBe(3);
  });

  test('Must divide two numbers', async () => {
    const res = await request(app).get('/divide?a=6&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero');
  });
});
