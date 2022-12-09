"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//acquiring mongoose framework
const mongoose = require('mongoose');
// export interface UserData {
// 	email: string;
// 	username: string;
// 	password: string;
// }
//this line below is used to suppress deprecation warnings
mongoose.set('strictQuery', true);
const mongoURI = 'mongodb+srv://zeus:123@cluster0.ntr77xf.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'zeus',
})
    .then(() => console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected'))
    .catch((err) => {
    console.log(`Error connecting to Mongo DB: ${err}`);
});
// const connectMongoose = async () => {
// 	try {
// 		await mongoose.connect(
// 			mongoURI,
// 			{
// 				useNewUrlParser: true,
// 				useUnifiedTopology: true,
// 				autoReconnect: true,
// 				dbName: 'zeus',
// 			},
// 			() => console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected')
// 		);
// 	} catch (err) {
// 		console.error('Error connecting to Mongoose:', err);
// 	}
// };
// connectMongoose();
// mongoose.connect(
// 	mongoURI,
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		autoReconnect: true,
// 		dbName: 'zeus',
// 	},
// 	() => console.log('🦆🦆🦆🦆🦆🦆🦆🦆  Mongoose is connected')
// );
const Schema = mongoose.Schema;
//user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});
//Collection name is Users
const User = mongoose.model('Users', userSchema);
// Export db
module.exports = User;
