//setting session from cookie
//reference: https://www.npmjs.com/package/express-session
import { Request, Response, NextFunction } from 'express';
const Session = require('../database/sessionModel');

const sessionController: object = {
	userLoggedIn(req: Request<any>, res: Response<any>, next: NextFunction) {
		if (res.locals.foundUser) {
			return next();
		}
		return next({
			log: 'ERROR: user not logged in',
			message: { err: 'An error occurred in user logged in middleware' },
		});
	},

	setUserSession(req: Request<any>, res: Response<any>, next: NextFunction) {
		//setting session
		const { _id } = res.locals.foundUser;
		Session.create({ cookieId: _id })
			.then((newSession: object) => {
				res.locals.newSession = newSession;
				console.log(res.locals.newSession)
				return next();
			})
			.catch((err: any) => {
				next({
					log: `ERROR: ${err}`,
					message: { err: 'An error occurred in create session middleware' },
				});
			});
	},
};

module.exports = sessionController;
