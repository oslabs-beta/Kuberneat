import { Request, Response, NextFunction } from 'express';

const Users = require('../database/db');

//User object middleware
const userController: object = {
	//create User
	createUser(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;
		Users.create({ email: email, password: password })
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
		const { email, password } = req.params;
		Users.find({ email: email, password: password })
			.then((existingUser: object) => {
				res.locals.foundUser = existingUser;
				console.log('this is found user:', res.locals.foundUser);
				next();
			})
			.catch((err: any) => {
				next({
					log: `Error in userController.createUser: ${err}`,
					message: {
						err: 'Error in getUser middleware',
					},
				});
			});
	},
	updateUser(req: Request, res: Response, next: any) {},
	deleteUser(req: Request, res: Response, next: any) {},
};
module.exports = userController;



// .then((existingUser: object) => {
// 	console.log(existingUser)
// 	res.locals.foundUser = existingUser;
// 	return next();
// })
// .catch((err: any) => {
// 	return next({
// 		log: `ERROR: ${err}`,
// 		message: { err: 'An error occurred in createUser middleware' },
// 	});
// });