"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const Users = require('../database/db');
const saltRound = 10;
//User object middleware
const userController = {
    //middleware for creating new user document in db
    createUser(req, res, next) {
        const { email, password } = req.body;
        //takes login password + salt and returns hashed password
        bcrypt.hash(password, saltRound, (error, hash) => {
            //if password isn't able to be hashed, return 500 error
            if (error) {
                res.send({
                    success: false,
                    statusCode: 500,
                    message: "Error salting password: " + error,
                });
            }
            else {
                //otherwise, create a new user in database with hashed password
                Users.create({ email: email, password: hash })
                    .then((newUser) => {
                    res.locals.newUser = newUser;
                    next();
                }) //if there are any errors, invoke the global error handler
                    .catch((err) => {
                    next({
                        log: `ERROR: ${err}`,
                        message: { err: 'An error occurred in create user middleware' },
                    });
                });
            }
        });
    },
    //middleware for verifying login credentials
    getUser(req, res, next) {
        const { email, password } = req.body;
        //finds document with email in request body
        Users.findOne({ email: email })
            .then((existingUser) => {
            //console.log({existingUser})
            res.locals.foundUser = existingUser;
            //console.log(res.locals.foundUser)
            //pulls hashed password from db
            const hash = res.locals.foundUser.password;
            //comparing attempted login password with hash password from db, will return boolean signifying match (result)
            bcrypt.compare(password, hash, (error, result) => {
                if (result) {
                    console.log('login success');
                    return next();
                }
                else {
                    return next('login unsuccessful');
                }
            });
        })
            .catch((err) => {
            next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in get user middleware' },
            });
        });
    },
    //middleware for verifying username (email) is unique
    checkForUser(req, res, next) {
        const { email, password } = req.body;
        //checks if there is a document with the email
        Users.findOne({ email: email })
            .then((existingUser) => {
            //if no user exists with this password -> allow the next middleware function to execute
            if (!existingUser) {
                return next();
            }
            else {
                //if this username already exists -> invoke global error handler
                return next('username already exists');
            }
        }) //if any residual error occurs, invoke global error handler
            .catch((err) => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in checkForUser middleware' },
            });
        });
    },
    //middleware for updating user document in db
    updateUser(req, res, next) {
        const { id } = req.params;
        const { email, password } = req.body;
        //finds document with id in request params and updates email and password
        Users.findOneAndUpdate(id, { email: email, password: password })
            .then((updatedUser) => {
            res.locals.updatedUser = updatedUser;
            return next();
        })
            .catch((err) => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in updateUser middleware' },
            });
        });
    },
    //middleware for deleting user document in db
    deleteUser(req, res, next) {
        const { id } = req.params;
        //finds document with id in request params and deletes it
        Users.findOneAndDelete(id)
            .then((deletedUser) => {
            res.locals.deletedUser = deletedUser;
            return next();
        })
            .catch((err) => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in deleteUser middleware' },
            });
        });
    },
};
module.exports = userController;
