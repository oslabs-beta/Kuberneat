//The purpose of this file is to test the creation, reading, updating and
//deletion of a user from the database. The tests are run using Jest.

describe('CreateUser', () => {
	test('should create a new user', async () => {
		const newUser = {
			username: 'testUser',
			password: 'testPassword',
		};

		const response = await fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		});
		const data = await response.json();
		expect(data).toEqual(newUser);
	});
});

describe('GetUser', () => {
	test('Should get all user signed up for Zeus in database', async () => {
		const response = await fetch('http://localhost:3000/users');
		const data = await response.json();
		expect(data).toEqual([]);
	});
});

describe('UpdateUser', () => {
	test("Should update a user's password", async () => {
		const updatedUser = {
			username: 'testUser',
			password: 'testPassword',
		};

		const response = await fetch('http://localhost:3000/users', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedUser),
		});
		const data = await response.json();
		expect(data).toEqual(updatedUser);
	});

	test("Should update a user's username", async () => {
		const updatedUser = {
			username: 'testUser',
			password: 'testPassword',
		};
		const response = await fetch('http://localhost:3000/users', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedUser),
		});
		const data = await response.json();
		expect(data).toEqual(updatedUser);
	});
});

describe('DeleteUser', () => {
	const deleteUser = {
		username: 'testUser',
		password: 'testPassword',
	};
	test('Should delete a user from the database', async () => {
		const response = await fetch('http://localhost:3000/users', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(deleteUser),
		});
		const data = await response.json();
		expect(data).toEqual(deleteUser);
	});
});
