//The purpose of this file is to test the connection to the database 
//		"test:db": "cross-env NODE_ENV=test jest --testTimeout=5000",
const request = require('supertest');

const app = require('../server');

const Users = require('../database/db');
const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI = 'mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority';

beforeAll(async () => {
  await mongoose.createConnection(mongoURI);
});
afterEach(async () => {
  // Closing the DB connection allows Jest to exit successfully.
  await mongoose.connection.close();
});

describe('DB connection', () => {
  it('should connect to the database', async () => {
    const response = await request(mongoose)
    .get(mongoURI)
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
 });

