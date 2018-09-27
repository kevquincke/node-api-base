import jwt from 'jsonwebtoken';

import { User, UserRole } from '../../../src/models/user';

describe('User model', () => {
  beforeAll(() => {
    process.env.JWT_KEY = 'shhhh';
  });

  it('should return a valid JWT', () => {
    const user = new User();
    user.id = '46ce402a-4658-4884-b80d-82a7fee87691';
    user.role = UserRole.Regular;

    const token = user.token;
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    expect(decoded).toMatchObject({
      id: '46ce402a-4658-4884-b80d-82a7fee87691',
      role: UserRole.Regular
    });
  });
});
