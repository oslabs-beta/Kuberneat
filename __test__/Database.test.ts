
jest.setTimeout(30000); 
import mongoose from 'mongoose';
const mongoDB = require('../src/server/database/db');

require('dotenv').config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
});

xit('Should connect to the database', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const db = mongoose.connection;
  expect(db.readyState).toBe(1);
});
