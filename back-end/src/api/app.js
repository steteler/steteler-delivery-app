const express = require('express');
const cors = require('cors');

const loginRouter = require('../routes/login.route');
const registerRouter = require('../routes/register.route');
const productsRouter = require('../routes/customer/products.route');
const salesRouter = require('../routes/seller/orders.route');
const userRouter = require('../routes/users.route');
const salesDetailsRouter = require('../routes/seller/OrdersDetails.route');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', productsRouter);
app.use('/seller/orders', salesRouter);
app.use('/customer/allOrders', salesRouter);
app.use('/user', userRouter);
app.use('/customer/orders', salesDetailsRouter);

app.use('/images', express.static(`${__dirname}/../images`));

module.exports = app;
