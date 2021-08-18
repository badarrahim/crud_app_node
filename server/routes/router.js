const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

//Routes

//@desc Home Route /

//@method GET
route.get('/', services.homeRoutes);

//@desc Home Route /add-user
//@method GET
route.get('/add-user', services.addRoute);

//@desc Home Route /update-user
//@method GET
route.get('/update-user', services.updateRoute);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;

