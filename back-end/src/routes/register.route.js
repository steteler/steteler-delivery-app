const express = require('express');
const registerController = require('../controller/register.controller');
const tokenValidator = require('../middlewares/tokenValidator');

const registerRouter = express.Router();

registerRouter.post('/', registerController.newUser);
registerRouter.post('/admin', tokenValidator, registerController.newUserByAdmin);

module.exports = registerRouter;