import supertest, { SuperTest, Request } from 'supertest';

import { User } from '../../src/models/user';
import App from '../../src/app';
import { createUser } from '../helpers';

const user = {
  email: 'test@example.com',
  password: 'password'
};

describe('/api/v1/user', () => {
  let request: SuperTest<Request>;

  beforeEach(async () => {
    await User.delete({ email: user.email });
  });

  beforeAll(async () => {
    const app = new App();
    await app.connectToDatabase();
    request = supertest(app.server);
  });

  describe('POST /', async () => {
    it('should return 200 if mail is not in use', async () => {
      const response = await createUser(request, user);

      expect(response.status).toBe(200);
    });

    it('should return a user object if everything is ok', async () => {
      const response = await createUser(request, user);

      expect(response.body).toMatchObject({ email: user.email });
    });

    it('should return 400 if using an existing mail', async () => {
      await createUser(request, user);
      const response = await createUser(request, user);

      expect(response.status).toBe(400);
    });

    it('should return 400 if data provided to endpoint is wrong', async () => {
      const response = await createUser(request, { email: user.email });

      expect(response.status).toBe(400);
    });
  });
});
