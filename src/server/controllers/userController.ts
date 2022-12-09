import { Request, Response, NextFunction } from 'express';
const bcrypt = require('bcrypt');
const Users = require('../database/db');
const saltRound = 10;

//User object middleware
const userController: object = {
	//create User 
	
	createUser(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;
		
		//hashing password
		bcrypt.hash(password, saltRound, (error: any, hash: string) => {
			if (error){
				res.send({
					success: false,
					statusCode: 500,
					message: "Error salting password: " + error,
				}) 
			} else {

		Users.create({ email: email, password: hash })
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
		}
	})},
	//get User
	getUser(req: Request, res: Response, next: any): void {
		const { email, password } = req.body;
	
		Users.findOne({email: email})
			.then((existingUser: object) => {
				console.log({existingUser})
				res.locals.foundUser = existingUser;
				console.log(res.locals.foundUser)
				const hash = res.locals.foundUser.password;
				
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
				message: { err: 'An error occurred in create user middleware' },
			});
		});
},


	updateUser(req: Request, res: Response, next: any) {},


	deleteUser(req: Request, res: Response, next: any) {},

 
}
module.exports = userController;



