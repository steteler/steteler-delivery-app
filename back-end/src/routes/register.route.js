const express = require('express');
const { newRegisterController } = require('../controller/register.controller');

const registerRouter = express.Router();

registerRouter.post('/', newRegisterController);

module.exports = registerRouter;