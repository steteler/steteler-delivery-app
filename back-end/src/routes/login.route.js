const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/');

module.exports = loginRouter;