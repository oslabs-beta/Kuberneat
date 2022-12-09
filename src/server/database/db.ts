import {
	ErrorRequestHandler,
  } from 'express';
  

//acquiring mongoose framework
const mongoose = require('mongoose');

// export interface UserData {
// 	email: string;
// 	username: string;
// 	password: string;
// }

//this line below is used to suppress deprecation warnings
mongoose.set('strictQuery', true);

const mongoURI =
	'mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority';

	mongoose
	.connect(mongoURI, {
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	  dbName: 'zeus',
	})
	.then(() =>  console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected'))
	.catch((err: ErrorRequestHandler) => {
	  console.log(`Error connecting to Mongo DB: ${err}`)
	});

//user schema
const userSchema = new mongoose.Schema({
	email: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
});

//Collection name is Users
const Users = mongoose.model('Users', userSchema);
// Export db
module.exports = Users;
