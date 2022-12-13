//The purpose of this file is to test the connection to the database
//		"test:db": "cross-env NODE_ENV=test jest --testTimeout=5000",

import request from 'supertest';
import mongoose from 'mongoose';

const mongoDB = require('../src/server/database/db');

require('dotenv').config();

beforeAll(async () => {
	await mongoose.createConnection();
});
afterEach(async () => {
	// Closing the DB connection allows Jest to exit successfully.
	await mongoose.connection.close();
});

describe('DB connection', () => {
	it('Should connect to the database', async () => {
		const response = await request(mongoDB).get(
			'mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority'
		);
		expect(response.status).toBe(200);
	});
});
