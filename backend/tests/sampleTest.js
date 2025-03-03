const request = require('supertest');
const app = require('../app');

describe('API Testing', () => {
  it('should return 200 for /api/health', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('API is running');
  });

  it('should return 404 for unknown route', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
  });
});
