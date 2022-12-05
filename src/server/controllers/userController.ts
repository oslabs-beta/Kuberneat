import { Request, Response, NextFunction } from 'express';

const Users = require('../database/db');

//User object middleware
const userController: object = {
	//create User
	createUser(req: Request, res: Response, next: NextFunction) {
		const { username, password } = req.body;
		//if user does not exist
		Users.create({ username: username, password: password })
			.then((existingUser: object) => {
				res.locals.foundUser = existingUser;
				return next();
			})
			.catch((err: any) => {
				return next({
					log: `ERROR: ${err}`,
					message: { err: 'An error occurred in getUser middleware' },
				});
			});
	},
	getUser(req: Request, res: Response, next: any): void {
		const { email, username, password } = req.body;
		//check if the if the user does not exist
		Users.find({ email: email, username: username, password: password })
			.then((createdUser: object) => {
				if (!username || !password) {
					res.locals.newUser = createdUser;
					return next();
				}
				console.log('this user already exists');
			})
			.catch((err: any) => {
				return next({
					log: `Error in userController.createUser: ${err}`,
					message: {
						err: 'Error in createUser middleware',
					},
				});
			});
	},
	updateUser(req: Request, res: Response, next: any) {},
	deleteUser(req: Request, res: Response, next: any) {},
};
module.exports = userController;
