import supertest from 'supertest';
import { createServer } from '@config/express';

describe('User', () => {
  describe('Get all users', () => {
    describe("Don't have valid token", () => {
      it('Should return 200', async () => {
        await supertest(createServer()).get(`/api/v1/user`).expect(200);
      });
    });
  });
});
