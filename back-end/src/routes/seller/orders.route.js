const express = require('express');
const { findAllSalesController } = require('../../controller/seller/orders.controller');

const salesRouter = express.Router();

salesRouter.get('/', findAllSalesController);

module.exports = salesRouter;