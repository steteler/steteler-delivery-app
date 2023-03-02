const express = require('express');

const loginRouter = require('../routes/login.route');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

module.exports = app;
