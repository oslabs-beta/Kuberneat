import { Request, Response, NextFunction } from 'express';

const Users = require('../database/db');

//User object middleware
const userController: object = {
	//create User
	createUser(req: Request, res: Response, next: NextFunction) {
		const { email, username, password } = req.body;
		Users.create({ email: email, username: username, password: password })
			.then((newUser: object) => {
				res.locals.newUser = newUser;
				next();
			})
			.catch((err: any) => {
				next({
					log: `ERROR: ${err}`,
					message: { err: 'An error occurred in create user middleware' },
				});
			});
	},
	//get User
	getUser(req: Request, res: Response, next: any): void {
		const { username, password } = req.params;
		Users.find({ username: username, password: password })
			.then((existingUser: object) => {
				res.locals.foundUser = existingUser;
				next();
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
