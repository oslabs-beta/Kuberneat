import { Request, Response, NextFunction } from 'express';
const Session = require('express-session');
const bcrypt = require('bcrypt');
const Users = require('../database/db');
const saltRound = 10;

//User object middleware
export const userController: object = {
	
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
	// middleware for verifying login credentials
	getUser(req: Request, res: Response, next: any): void {
		const { email, password } = req.body;
		//finds document with email in request body
		Users.findOne({email: email})
		.then((existingUser: any) => {
			res.locals.foundUser = existingUser;
			//if no user exists with this email -> invoke global error handler
			if(!existingUser) {
				return next('User not found')
			}
			//if user exists with this email -> compare password with hashed password
			//in db
			bcrypt.compare(password, existingUser.password, (error: any, result: any) => {
				//if password doesn't match -> invoke global error handler
				if (error){
					return next('Password does not match')
				}
				//if password matches -> allow the next middleware function to execute
				if (result){
					// set cookie 
					// res.cookie('User', res.locals.foundUser, { httpOnly: true });
					// res.cookie('Password', res.locals.foundUser.password, { httpOnly: true });
					// res.cookie('secret', Math.floor(Math.random() * 100), {httpOnly: true});
					return next()
				}
			})
			
		})//if any residual error occurs, invoke global error handler
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

	//middleware for updating user document in db
	updateUser(req: Request, res: Response, next: any) {
		const {id} = req.params;
		const {email, password} = req.body;
		//finds document with id in request params and updates email and password
		Users.findOneAndUpdate(id, {email: email, password: password})
		.then ((updatedUser: object) => {
			res.locals.updatedUser = updatedUser;
			return next();
		})
		.catch((err: any) => {
			return next({
				log: `ERROR: ${err}`,
				message: { err: 'An error occurred in updateUser middleware' },
			});
		}); 
	},

	//middleware for deleting user document in db
	deleteUser(req: Request, res: Response, next: any) {
		const {id} = req.params;
		//finds document with id in request params and deletes it
		Users.findOneAndDelete(id)
		.then ((deletedUser: object) => {
			res.locals.deletedUser = deletedUser;
			return next();
		})
		.catch((err: any) => {
			return next({
				log: `ERROR: ${err}`,
				message: { err: 'An error occurred in deleteUser middleware' },
			});
		});
	},

 
}
module.exports = userController;



