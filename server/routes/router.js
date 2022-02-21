const express = require("express");
// const app = express(); // 這樣會另啟一app

const route = express.Router();

const services = require("../services/render");
route.get("/", services.rootPage);
route.get("/addMember", services.addMember);

// API
const controller = require("../controller/controller");
route.get('/api/users', controller.find);
route.post('/api/users', controller.create);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;
