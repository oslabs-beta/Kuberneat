//The purpose of this file is to test route handlers. The tests are run using Jest and Supertest.

const request = require('supertest');

import  express, { Response, Request } from 'express';
import mongoose from 'mongoose';

const app = express();

// const server = 'http://localhost:3000';

beforeAll (done => {
	done();
});

afterAll (done => {
	// Closing the DB connection allows Jest to exit successfully.
	mongoose.connection.close()
	done();
});

describe('GET /', () => {
	it ('Backend and Frontend should be speaking to each other', () => {
		request(app)
		.get('/')
		.set('Accept', 'text/html')
		.expect('Content-Type', "text/html; charset=utf-8")
		.expect(200);
		
	});
});

describe('GET /metrics', () => {
	it ('Should return the metrics from prom-client', () => {
		request(app)
		.get('/metrics')
		.set('Accept', 'text/plain')
		.expect('Content-Type', /text/)
		.expect(200);
	});
});
describe('GET /apis/metrics.k8s.io/v1beta1', () => {
	it('Should list metrics from http://localhost:8085', () => {
		request(app)
		.get('/apis/metrics.k8s.io/v1beta1')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200);
	});
});
describe('GET /apis/metrics.k8s.io/v1beta1/nodes', () => {
	it ('Should list out node health info on http://localhost:8085', () => {
		request(app)
		.get('/apis/metrics.k8s.io/v1beta1/nodes')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200);
	});
});

describe('GET /cluster', () => {
	it ('Should obtain cluster info from CLI', () => {
		request(app)
		.get('/cluster')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200);
	});
});

describe('POST /login', () => {
	it ('Should get a user from the database', () => {
		request(app)
		.post('/login')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200);
	});
});

describe('POST /register', () => {
	it ('Should register a user', () => {
		request(app)
		.post('/register')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200);
	});
});



// describe('CreateUser', () => {
// 	test('should create a new user', async () => {
// 		const newUser = {
// 			username: 'testUser',
// 			password: 'testPassword',
// 		};

// 		const response = await fetch('http://localhost:3000/register', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(newUser),
// 		});
// 		const data = await response.json();
// 		expect(data).toEqual(User);
// 	});
// });

// describe('GetUser', () => {
// 	test('Should get all user signed up for Zeus in database', async () => {
// 		const response = await fetch('http://localhost:3000/users');
// 		const data = await response.json();
// 		expect(data).toEqual([]);
// 	});
// });

// describe('UpdateUser', () => {
// 	test("Should update a user's password", async () => {
// 		const updatedUser = {
// 			username: 'testUser',
// 			password: 'testPassword',
// 		};

// 		const response = await fetch('http://localhost:3000/users', {
// 			method: 'PUT',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(updatedUser),
// 		});
// 		const data = await response.json();
// 		expect(data).toEqual(User);
// 	});

// 	test("Should update a user's username", async () => {
// 		const updatedUser = {
// 			username: 'testUser',
// 			password: 'testPassword',
// 		};
// 		const response = await fetch('http://localhost:3000/users', {
// 			method: 'PUT',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(User),
// 		});
// 		const data = await response.json();
// 		expect(data).toEqual(User);
// 	});
// });

// describe('DeleteUser', () => {
// 	const deleteUser = {
// 		username: 'testUser',
// 		password: 'testPassword',
// 	};
// 	test('Should delete a user from the database', async () => {
// 		const response = await fetch('http://localhost:3000/users', {
// 			method: 'DELETE',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(deleteUser),
// 		});
// 		const data = await response.json();
// 		expect(data).toEqual(User);
// 	});
// });
