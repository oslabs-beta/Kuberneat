//The purpose of this file is to test the connection to the database
//		"test:db": "cross-env NODE_ENV=test jest --testTimeout=5000",

import request from 'supertest';
import mongoose from 'mongoose';

const app = require('../src/server/server');

require('dotenv').config();

const mongoURI =
	'mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority';

beforeAll(async () => {
	await mongoose.createConnection(mongoURI);
});
afterEach(async () => {
	// Closing the DB connection allows Jest to exit successfully.
	await mongoose.connection.close();
});

describe('DB connection', () => {
	it('should connect to the database', async (done) => {
		const response = await request(app)
    .get('mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority');
		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
    done();
	});
});

