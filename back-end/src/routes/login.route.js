const express = require('express');
const LoginController = require('../controller/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', LoginController.getByEmail);

module.exports = loginRouter;