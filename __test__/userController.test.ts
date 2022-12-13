import request from 'supertest';
import mongoose from 'mongoose';
import { response } from 'express';

const Users = require('..src/server/database/db');
const userController = require('../src/server/controllers/userController');
const app = require('../src/server/app');

jest.mock(userController);
jest.mock(Users);

const mockRequest = () => {
	const request: Object = {
		username:'testUser',
		password:'testPassword',
	}
	return request;
}

const mockResponse = () => {
	const response: any = {};
	response.status = jest.fn().mockReturnValue(response);
	response.json = jest.fn().mockReturnValue(response);
	return response;
}

describe('User Controller', () => {
	const mockedNext = jest.fn();
	const mockedRequest = mockRequest();
	const mockedResponse = mockResponse();
	const mockedEntries = {
		data: {}	
	}
	// request.get.mockedResolvedValue(mockedEntries);
	// const result = get(mockedRequest, mockedResponse, mockedNext);
	// expect(result).toEqual(mockedEntries);


});

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
