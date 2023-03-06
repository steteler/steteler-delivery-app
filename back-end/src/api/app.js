const express = require('express');
const cors = require('cors');

const loginRouter = require('../routes/login.route');
const registerRouter = require('../routes/register.route');
const productsRouter = require('../routes/products.route');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', productsRouter);

app.use('/images', express.static(`${__dirname}/../images`));

module.exports = app;
