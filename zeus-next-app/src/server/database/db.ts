import { ErrorRequestHandler } from 'express';
import path = require('path');
require('dotenv').config();

//acquiring mongoose framework
const mongoose = require('mongoose');

require("dotenv").config({
  path: path.resolve(__dirname, "../../../process.env"),
});

//this line below is used to suppress deprecation warnings
mongoose.set('strictQuery', true);

//Data can be accessed anywhere -Look at env file to find username and password

//to hide server from public 
const URI = process.env.MONGO_URI;


//establishing connection to mongo
mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// dbName: 'zeus',
	})
	.then(() => console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected'))
	.catch((err: ErrorRequestHandler) => {
		console.log(`Error connecting to Mongo DB: ${err}`);
	});

//user schema
const userSchema = new mongoose.Schema({
	email: { type: String, required: true , unique: true},
	password: { type: String, required: true },
});

//Collection name is Users
const Users = mongoose.model('Users', userSchema);
// Export db
module.exports = Users;
