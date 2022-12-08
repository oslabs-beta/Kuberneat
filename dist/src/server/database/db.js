var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//acquiring mongoose framework
const mongoose = require('mongoose');
//storing db -preventing public to see this information on client side
// const myURI = 'mongodb+srv://jwrog782:3r0NcsRV8RVaBwIk@cluster0.qijg05f.mongodb.net/?retryWrites=true&w=majority';
const mongoURI = 'mongodb+srv://zeus:zeus@cluster0.1i7iws7.mongodb.net/?retryWrites=true&w=majority';
const mongoDbConnection = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const db = yield mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected...');
        return db;
    }
    catch (err) {
        console.log('Error connecting to MongoDB', err);
    }
});
// mongoose.connection.once(mongoURI, (err: any) => {
// 	if (err) {
// 		console.log('Error connecting to mongoDB', err);
// 	} else {
// 		console.log('Connected to MongoDB');
// 	}
// });
//user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});
//Collection name is Users
const Users = mongoose.model('Users', userSchema); //const User =
// Export db
module.exports = Users;
