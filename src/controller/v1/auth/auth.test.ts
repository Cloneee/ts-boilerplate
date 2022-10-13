import supertest from 'supertest';
import { createServer } from '@config/express';

describe('Auth', () => {
  describe('Login', () => {
    describe('Valid username and password', () => {
      it('Should return 200', async () => {
        await supertest(createServer())
          .post(`/api/v1/auth/login`)
          .send({ username: 'huythanhnguyen', password: 'huy123' })
          .expect(200);
      });
    });
    describe('Invalid username and password', () => {
      it('Should return 401', async () => {
        await supertest(createServer())
          .post(`/api/v1/auth/login`)
          .send({ username: 'huythanhnguyen', password: 'huy123456' })
          .expect(401);
      });
    });
  });
});
