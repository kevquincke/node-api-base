import supertest, { SuperTest, Request } from 'supertest';

import App from 'src/App';
import { User, UserRole } from 'models/user';
import { AUTH_HEADER } from 'constants/constants';
import { authenticate, createAdmin } from '../helpers';

const superAdmin = {
  email: 'admin@example.com',
  password: 'password'
};

const newAdmin = {
  email: 'admin2@example.com',
  password: 'password'
};

describe('/api/v1/admin', () => {
  let request: SuperTest<Request>;

  beforeEach(async () => {
    await User.delete({ email: newAdmin.email });
  });

  beforeAll(async () => {
    const app = new App();
    await app.connectToDatabase();
    request = supertest(app.server);

    const { email, password } = superAdmin;
    await User.delete({ email });

    const admin = new User();
    admin.email = email;
    admin.password = password;
    admin.role = UserRole.Admin;
    await admin.save();
  });

  describe('POST /', () => {
    it('should return 401 if not logged in', async () => {
      const response = await createAdmin(request, newAdmin);

      expect(response.status).toBe(401);
    });

    it('should return 200 if logged in and created by another admin', async () => {
      const auth = await authenticate(request, superAdmin);

      const token = auth.get(AUTH_HEADER);
      const response = await createAdmin(request, newAdmin, token);

      expect(response.status).toBe(200);
    });
  });
});
