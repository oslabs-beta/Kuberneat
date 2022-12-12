//Set Cookies and Session
import { Request, Response, NextFunction } from 'express';

const cookieController: object = {
	setUserCookie(res: Response<any>, req: Request<any>, next: NextFunction) {
		//setting cookie
		res.cookie('User', res.locals.foundUser, { httpOnly: true });
		res.cookie('Password', res.locals.foundUser.password, { httpOnly: true });
		return next();
	},
};

module.exports = cookieController;
