import { Request, Response, SuperTest } from 'supertest';

import { AUTH_HEADER } from 'constants/constants';

export const createUser = async (
  request: SuperTest<Request>,
  user: any
): Promise<Response> => (
   await request
    .post('/api/v1/user')
    .set('Content-Type', 'application/json')
    .send(user)
);

export const createAdmin = async (
  request: SuperTest<Request>,
  admin: any,
  token: string = ''
): Promise<Response> => (
  await request
    .post('/api/v1/admin')
    .set('Content-Type', 'application/json')
    .set(AUTH_HEADER, token)
    .send(admin)
);

export const authenticate = async (
  request: SuperTest<Request>,
  user: any
): Promise<Response> => (
  await request
  .post('/api/v1/auth')
  .set('Content-Type', 'application/json')
  .send(user)
);
