import { Server } from 'http';
import supertest, { SuperTest, Request, Response } from 'supertest';

import App from '../../src/app';
import User from '../../src/models/user';

const port = parseInt(process.env.PORT) || 3001;
const email = 'test@example.com';

const createUser = async (request: SuperTest<Request>): Promise<Response> => {
  const user = {
    email,
    password: 'password'
  };

  return await request
    .post('/api/v1/user')
    .set('Content-Type', 'application/json')
    .send(user);
};

describe('/api/v1/user', () => {
  let server: Server;
  let request: SuperTest<Request>;

  beforeEach(async () => {
    await User.delete({ email });
  });

  beforeAll(async () => {
    const app = new App();
    server = await app.listen(port);
    request = supertest(server);
  });

  afterAll(async () => {
    server.close();
  });

  describe('POST /', async () => {
    it('should return 200 when mail is not in use', async () => {
      const response = await createUser(request);

      expect(response.status).toBe(200);
    });

    it('should return a user object when everything is ok', async () => {
      const response = await createUser(request);

      expect(response.body).toMatchObject({ email });
    });

    it('should return 400 when using an existing mail', async () => {
      await createUser(request);
      const response2 = await createUser(request);

      expect(response2.status).toBe(400);
    });
  });
});
