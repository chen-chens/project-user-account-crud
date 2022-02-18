const express = require("express");
const app = express();

// dotenv: 
const dotenv = require("dotenv");   // 引入 module: dotenv
dotenv.config({path: "config.env"});// config()方法：提取該路徑的檔案資料
const PORT = process.env.PORT||8000;

// morgan: 紀錄 node 活動日誌
const morgan = require("morgan");
app.use(morgan("tiny"));

/* 
    設置靜態檔案目錄
    app.use("自定義虛擬起始路徑", express.static("目前folder路徑"));  ---> http://localhost:5500/自定義虛擬起始路徑/目前folder路徑下的資料
    app.use("/static", express.static(path.resolve(__dirname, 'public')));  ---> http://localhost:5500/static/xxx 來源來自public資料夾下的內容
*/
const path = require("path");
app.use('/css', express.static(path.resolve(__dirname, "public/css")));
app.use('/js', express.static(path.resolve(__dirname, "public/js")));


// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

// set view engine
app.set("view engine", "ejs");

app.get("/", ((req, res) => {
    // res.render('index.html');

    res.sendFile(path.resolve(__dirname, './views/index.html'))
}))
app.get("/form", ((req, res) => {
    // res.render('index.html');

    res.sendFile(path.resolve(__dirname, './views/form.html'))
}))

app.listen(PORT, ()=> {
    console.log("server starting...port:" + PORT)
})