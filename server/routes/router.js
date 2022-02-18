const express = require("express");
// const app = express(); // 這樣會另啟一app
const services = require("../services/render");

const route = express.Router();

route.get("/", services.rootPage)
route.get("/addMember", services.addMember)

module.exports = route;
