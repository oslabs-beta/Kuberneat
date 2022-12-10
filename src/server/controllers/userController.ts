import { Request, Response, NextFunction } from 'express';
const bcrypt = require('bcrypt');
const Users = require('../database/db');
const saltRound = 10;

//User object middleware
const userController: object = {
	
	//middleware for creating new user document in db
	createUser(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;
		
		//takes login password + salt and returns hashed password
		bcrypt.hash(password, saltRound, (error: any, hash: string) => {
			//if password isn't able to be hashed, return 500 error
			if (error){
				res.send({
					success: false,
					statusCode: 500,
					message: "Error salting password: " + error,
				}) 
			} else {
			//otherwise, create a new user in database with hashed password
		Users.create({ email: email, password: hash })
			.then((newUser: object) => {
				res.locals.newUser = newUser;
				next();
			})//if there are any errors, invoke the global error handler
			.catch((err: any) => {
				next({
					log: `ERROR: ${err}`,
					message: { err: 'An error occurred in create user middleware' },
				});
			});
		}
	})},
	//middleware for verifying login credentials
	getUser(req: Request, res: Response, next: any): void {
		const { email, password } = req.body;
		//finds document with email in request body
		Users.findOne({email: email})
			.then((existingUser: object) => {
				//console.log({existingUser})
				res.locals.foundUser = existingUser;
				//console.log(res.locals.foundUser)
				//pulls hashed password from db
				const hash = res.locals.foundUser.password;
				//comparing attempted login password with hash password from db, will return boolean signifying match (result)
				 bcrypt.compare(password, hash, (error: any, result: string) => {
					if (result){
						console.log('login success')
						return next()
					} else {
						return next('login unsuccessful')
					}
				})
			})
			.catch((err: any) => {
			next({
				log: `ERROR: ${err}`,
				message: { err: 'An error occurred in get user middleware' },
			});
		});
},
	//middleware for verifying username (email) is unique
	checkForUser(req: Request, res: Response, next: any){
		const { email, password } = req.body;
		//checks if there is a document with the email
		Users.findOne({email: email})
		.then((existingUser: object) => {
			//if no user exists with this password -> allow the next middleware function to execute
			if (!existingUser){
				return next()
			} else {
				//if this username already exists -> invoke global error handler
				return next('username already exists')
			}
		})//if any residual error occurs, invoke global error handler
		.catch((err: any) => {
			return next({
				log: `ERROR: ${err}`,
				message: { err: 'An error occurred in checkForUser middleware' },
			});
		})

	},


	updateUser(req: Request, res: Response, next: any) {},


	deleteUser(req: Request, res: Response, next: any) {},

 
}
module.exports = userController;



