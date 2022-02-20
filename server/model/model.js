const mongoose = require("mongoose");


// 定義 mongoDB 回傳的資料型別
const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    level: String,
});

const userdb = mongoose.model("userdb", schema);
module.exports = userdb;