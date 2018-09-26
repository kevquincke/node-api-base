import supertest, { SuperTest, Request } from 'supertest';

import App from '../../src/app';

describe('/api/v1/home', () => {
  let request: SuperTest<Request>;

  beforeAll(async () => {
    const app = new App();
    await app.connectToDatabase();
    request = supertest(app.server);
  });

  describe('GET /', () => {
    it('should return 200', async () => {
      const response = await request.get('/api/v1/');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /status', () => {
    it('should return that server is online', async () => {
      const response = await request.get('/api/v1/status');
      expect(response.body).toMatchObject({ online: true });
    });
  });
});
