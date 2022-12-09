"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../database/db');
//User object middleware
const userController = {
    //create User
    createUser(req, res, next) {
        const { email, username, password } = req.body;
        User.create({ email: email, username: username, password: password })
            .then((existingUser) => {
            res.locals.foundUser = existingUser;
            next();
        })
            .catch((err) => {
            next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in create user middleware' },
            });
        });
    },
    //get User
    getUser(req, res, next) {
        const { email, username, password } = req.body;
        User.find({ email: email, username: username, password: password })
            .then((createdUser) => {
            if (!username || !password || !email) {
                res.locals.newUser = createdUser;
                return next();
            }
            console.log('this user already exists');
        })
            .catch((err) => {
            return next({
                log: `Error in userController.createUser: ${err}`,
                message: {
                    err: 'Error in createUser middleware',
                },
            });
        });
    },
    updateUser(req, res, next) { },
    deleteUser(req, res, next) { },
};
module.exports = userController;
