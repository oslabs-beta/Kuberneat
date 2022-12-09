import { Request, Response, NextFunction } from 'express';

const Users = require('../database/db');

//User object middleware
const userController: object = {
	//create User
	createUser(req: Request, res: Response, next: NextFunction) {
		const { username, password } = req.body;
		//const username = email;
		//console.log(req.body)
		console.log('in create user')
	if (!username || !password ) return next('Missing username or password in createUser');
		Users.create({ email: username, username: username, password: password })
			.then((newUser: object) => {
			console.log(newUser)
			res.locals.foundUser = newUser;
			return next()})
			.catch((err: any) => {
			return next({
				log: `ERROR: ${err}`,
				message: { err: 'An error occurred in createUser middleware' },
			});
		});
	}
			
	,
	//get User
	getUser(req: Request, res: Response, next: any): void {
		const { email, username, password } = req.body;
		Users.find({ email: email, username: email, password: password })
			.then((createdUser: object) => {
				if (!username || !password) {
					res.locals.newUser = createdUser;
					return next();
				}
				console.log('this user already exists');
			})
			.catch((err: any) => {
				return next({
					log: `Error in userController.getUser: ${err}`,
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