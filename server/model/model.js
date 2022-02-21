const mongoose = require("mongoose");


// 定義 mongoDB 回傳的資料模型
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ["General", "VIP", "VVIP"]
    },
    phone: String,
});

// 創建模型 Compile model from Schema: mongoose.model("模型名稱", 資料定義)
const Userdb = mongoose.model("Userdb", schema);
module.exports = Userdb;