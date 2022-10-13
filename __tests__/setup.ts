import { connect, disconnect } from 'mongoose';

beforeAll(async () => {
  await connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await disconnect();
});
