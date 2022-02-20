const mongoose = require('mongoose');
const connectDB = async ()=> {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log("Mongo connection err; ", err);
        process.exit(1)
    }
}

module.exports = connectDB;