
//aquiring mongoose framework
const mongoose = require('mongoose');
//const dotenv = require('dotenv');
// import { ConnectOptions } from 'mongodb';

//storing db -preventing public to see this information on client side 
const myURI = 'mongodb+srv://jwrog782:3r0NcsRV8RVaBwIk@cluster0.qijg05f.mongodb.net/?retryWrites=true&w=majority';


// require("dotenv").config({
//     path: path.resolve(__dirname, "../../process.env"),
//   });
// dotenv.config();



//connecting to mongo db, displaying message if connected. 
mongoose.connect(myURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Users'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch((err) => console.log(err));


// mongoose.connection.once('db open', () => console.log('Connected to Mongo'));

// const db = mongoose.connection;

// const URI = process.env.MONGO_URI || myURI;

// db.on("error", (err) => console.log(err));

// // Bind connection to error event (to get notification of connection errors)
// db.on(
//   "error",
//   console.error.bind(console, "\u001b[1;31m MongoDB connection error:")
// );


//Creating a schema object
//const Schema = mongoose.Schema; 

//user schema
const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  username: {type: String, required: true}, 
  password: {type: String, required: true},
});

//Collection name is Users 
const Users = mongoose.model('Users', userSchema); //const User = 
// Export db
module.exports = Users;

