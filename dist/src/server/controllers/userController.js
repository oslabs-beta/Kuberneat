"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users = require('../database/db');
//User object middleware
const userController = {
    //create User
    createUser(req, res, next) {
        const { username, password } = req.body;
        //const username = email;
        //console.log(req.body)
        console.log('in create user');
        if (!username || !password)
            return next('Missing username or password in createUser');
        Users.create({ email: username, username: username, password: password })
            .then((newUser) => {
            console.log(newUser);
            res.locals.foundUser = newUser;
            return next();
        })
            .catch((err) => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in createUser middleware' },
            });
        });
    },
    //get User
    getUser(req, res, next) {
        const { email, username, password } = req.body;
        Users.find({ email: email, username: email, password: password })
            .then((createdUser) => {
            if (!username || !password) {
                res.locals.newUser = createdUser;
                return next();
            }
            console.log('this user already exists');
        })
            .catch((err) => {
            return next({
                log: `Error in userController.getUser: ${err}`,
                message: {
                    err: 'Error in getUser middleware',
                },
            });
        });
    },
    updateUser(req, res, next) { },
    deleteUser(req, res, next) { },
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
