"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../database/db');
//User object middleware
const userController = {
    //create User
    createUser(req, res, next) {
        const { username, password } = req.body;
        //check if the if the user does not exist
        Users.findOne({ username, password })
            .then((createdUser) => {
            if (!username || !password) {
                res.locals.newUser = createdUser;
            }
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
    getUser(req, res, next) {
        const { username } = req.body;
        //if user does not exist
        Users.findOne({ username: username })
            .then((existingUser) => {
            res.locals.foundUser = existingUser;
            return next();
        })
            .catch((err) => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in get user controller' },
            });
        });
    },
    updateUser(req, res, next) { },
    deleteUser(req, res, next) { },
};
module.exports = userController;
