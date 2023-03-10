const express = require('express');
const {
  findAllSalesController,
  newSaleController,
} = require('../../controller/seller/orders.controller');

const salesRouter = express.Router();

salesRouter.get('/', findAllSalesController);
salesRouter.post('/:id', newSaleController);

module.exports = salesRouter;
