import { ErrorRequestHandler } from 'express';
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const URI = process.env.MONGO_URI;


mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// dbName: 'zeus',
	})
	.then(() => console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected'))
	.catch((err: ErrorRequestHandler) => {
		console.log(`Error connecting to Mongo DB: ${err}`);
	});


const userSchema = new mongoose.Schema({
	email: { type: String, required: true , unique: true},
	password: { type: String, required: true },
});


const Users = mongoose.model('Users', userSchema);

module.exports = Users;
