// import request from 'supertest';
// import mongoose from 'mongoose';

//const Users = require('..src/server/database/db');
// const userController = require('../src/server/controllers/userController');

// beforeAll ((done) => {
// 	// const mongoURI = 'mongodb+srv://zeus:123@cluster0.ntr77xf. mongodb.net/?retryWrites=true&w=majority';
// 	// mongoose.connect(mongoURI);
// 	done();
// });

// afterAll (done => {
// 	// Closing the DB connection allows Jest to exit successfully.
// 	mongoose.connection.close()
// 	done();
// });

// describe('POST /register', () => {
// 	it ('Database should create a user', () => {
// 		const response = request(userController)
// 		.post('/register')
// 		.set({
// 			email: 'testUser@test.com',
// 			password: 'testPassword',
// 		});
// 		expect(response).toEqual(200);
// 	});
// });

// describe('READ users', () => {
// 	request(app)
// 	.post('/login')
// 	.set('Accept', 'application/json')
// 	.expect('Content-Type', /json/)
// 	.expect(200);
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
