import mongoose from "mongoose";
const DB_URL = 'mongodb://mongoadmin:mongoadmin@mongo:27017';

/**
 * 連線
 */
mongoose.connect(DB_URL,{useNewUrlParser:true});

/**
 * 連線成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 連線異常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 連線斷開
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

export default mongoose;