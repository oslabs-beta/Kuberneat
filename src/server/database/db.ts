import { ErrorRequestHandler } from 'express';

//acquiring mongoose framework
const mongoose = require('mongoose');

//this line below is used to suppress deprecation warnings
mongoose.set('strictQuery', true);

//Data can be accessed anywhere -Look at env file to find username and password
const mongoURI = 'mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority';

//to hid server from public 
const URI = process.env.MONGO_URI || mongoURI;

//establishing connection to mongo
mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: 'zeus',
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

export {};
