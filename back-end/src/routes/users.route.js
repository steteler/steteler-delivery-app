const express = require('express');
const { findAllUserController } = require('../controller/users.controller');

const userRouter = express.Router();

userRouter.get('/', findAllUserController);

module.exports = userRouter;
