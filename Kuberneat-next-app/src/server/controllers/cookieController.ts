//Set Cookies and Session
import { Request, Response, NextFunction } from 'express';
//set user cookie from foundUser in usercontroller.getUser()
//set session cookie from newSession in sessionController.setUserSession(
//set cookie session
const cookieController: object = {
	setUserCookie(res: Response<any>, req: Request<any>, next: NextFunction): void{
		res.cookie('User', res.locals.foundUser, { httpOnly: true });
		res.cookie('Password', res.locals.foundUser.password, { httpOnly: true });
		res.cookie('secret', Math.floor(Math.random() * 100), { httpOnly: true });
		return next();
	},
	//set cookie session 
	setSessionCookie(res: Response<any>, req: Request<any>, next: NextFunction) {
		//setting cookie session
		res.cookie('Session', res.locals.newSession, { httpOnly: true });
		return next();
	}
};

module.exports = cookieController;
