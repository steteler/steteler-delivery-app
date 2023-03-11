const express = require('express');
const { findAllProductsController } = require('../../controller/customer/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', findAllProductsController);

module.exports = productsRouter;