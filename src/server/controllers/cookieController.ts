//Set Cookies and Session
import { Request, Response, NextFunction } from 'express';

const cookieController: object = {
	setUserCookie(res: Response<any>, req: Request<any>, next: NextFunction) {
		//setting cookie
		res.cookie('User', res.locals.foundUser, { httpOnly: true });
		res.cookie('Password', res.locals.foundUser.password, { httpOnly: true });
		res.cookie('secret', Math.floor(Math.random() * 100));
		return next();
	},
	setSessionCookie(res: Response<any>, req: Request<any>, next: NextFunction) {
		//setting session
		const { _id } = res.locals.fondUser;
		res.cookie('Session', _id, { httpOnly: true });
		return next();
	}
};

module.exports = cookieController;
