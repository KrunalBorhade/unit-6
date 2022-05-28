const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log("Mongodb is connected");
    }
    catch(err){
        console.log("Error is",err);
    }
}

module.exports = connectDB;