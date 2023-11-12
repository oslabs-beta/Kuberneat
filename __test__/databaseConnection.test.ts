//The purpose of this file is to test the connection to the database
//		"test:db": "cross-env NODE_ENV=test jest --testTimeout=5000",


import mongoose from 'mongoose';

const mongoDB = require('../src/server/database/db');

require('dotenv').config();

beforeAll(async () => {
  // Connecting to database before test
  await mongoose.connect(process.env.MONGO_URI)
  });


afterEach(async () => {
  // Closing the DB connection 
  await mongoose.disconnect();
});

describe('DB connection', () => {
  it('Should connect to the database', async () => {
    const db = mongoose.connection;
    // Check if the connection is established (1: connected)
    expect(db.readyState).toBe(1); 
  });
});


/* These tests are for a temporary database using MongoMemoryServer*/

/*
let mongoServer: MongoMemoryServer;
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import mongoose from 'mongoose';

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri)
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('DB connection', () => {
  it('Should connect to the database', () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1); // Check if the connection is established (1: connected)
  });
});
*/


