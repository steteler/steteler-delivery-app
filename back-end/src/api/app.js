const express = require('express');

const loginRouter = require('../routes/login.route');
const registerRouter = require('../routes/register.route');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', registerRouter);

module.exports = app;
