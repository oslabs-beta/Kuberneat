"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const Users = require('../database/db');
const saltRound = 10;
//User object middleware
const userController = {
    //create User 
    createUser(req, res, next) {
        const { email, password } = req.body;
        //hashing password
        bcrypt.hash(password, saltRound, (error, hash) => {
            if (error) {
                res.send({
                    success: false,
                    statusCode: 500,
                    message: "Error salting password: " + error,
                });
            }
            else {
                Users.create({ email: email, password: hash })
                    .then((newUser) => {
                    res.locals.newUser = newUser;
                    next();
                })
                    .catch((err) => {
                    next({
                        log: `ERROR: ${err}`,
                        message: { err: 'An error occurred in create user middleware' },
                    });
                });
            }
        });
    },
    //get User
    getUser(req, res, next) {
        const { email, password } = req.params;
        Users.find({ email: email, password: password })
            .then((existingUser) => {
            res.locals.foundUser = existingUser;
            console.log('this is found user:', res.locals.foundUser);
            next();
        })
            .catch((err) => {
            next({
                log: `Error in userController.createUser: ${err}`,
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
