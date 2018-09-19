import { Server } from 'http';
import supertest, { SuperTest, Request } from 'supertest';

import App from '../../src/app';

const PORT = parseInt(process.env.PORT) || 3000;

describe('/api/v1/home', () => {
  let server: Server;
  let request: SuperTest<Request>;

  beforeAll(async () => {
    const app = new App();
    server = await app.listen(PORT);
    request = supertest(server);
  });

  afterAll(async () => {
    server.close();
  });

  describe('GET /', () => {
    it('should return 200', async () => {
      const response = await request.get('/api/v1/');
      expect(response.status).toBe(200);
    });
  });
});
