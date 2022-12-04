import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import { ErrorCallback } from 'typescript';

const Users = require('../database/db');

//User object middleware
const userController: object = {
	//create User
	createUser(req: Request, res: Response, next: NextFunction) {},
	getUser(req: Request, res: Response, next: any): void {},
	updateUser(req: Request, res: Response, next: any) {},
	deleteUser(req: Request, res: Response, next: any) {},
};
module.exports = userController;
