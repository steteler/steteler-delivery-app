const express = require('express');
const loginControler = require('../controller/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', loginControler.getByEmail);

module.exports = loginRouter;