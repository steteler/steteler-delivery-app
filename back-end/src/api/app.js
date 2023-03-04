const express = require('express');
const cors = require('cors');

const loginRouter = require('../routes/login.route');
const registerRouter = require('../routes/register.route');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use('/login', loginRouter);
app.use('/register', registerRouter);

module.exports = app;
