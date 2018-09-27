import supertest, { SuperTest, Request } from 'supertest';

import { User } from '../../src/models/user';
import App from '../../src/app';
import { authenticate, createUser } from '../helpers';
import { AUTH_HEADER } from '../../src/constants/constants';

const user = {
  email: 'test@example.com',
  password: 'password'
};

describe('/api/v1/auth', () => {
  let request: SuperTest<Request>;

  beforeAll(async () => {
    const app = new App();
    await app.connectToDatabase();
    request = supertest(app.server);

    await User.delete({ email: user.email });

    await createUser(request, user);
  });

  describe('POST /', async () => {
    it('should return 200 if authentication is successful', async () => {
      const auth = await authenticate(request, user);

      expect(auth.status).toBe(204);
    });

    it('should return a token if authentication is successful', async () => {
      const auth = await authenticate(request, user);

      expect(auth.get(AUTH_HEADER)).not.toBeNull();
    });

    it('should return 400 if email or password is wrong', async () => {
      const auth = await authenticate(request, { email: 'notok@example.com', password: 'password' });
      const auth2 = await authenticate(request, { email: user.email, password: 'password2' });

      expect(auth.status).toBe(400);
      expect(auth2.status).toBe(400);
    });
  });
});
