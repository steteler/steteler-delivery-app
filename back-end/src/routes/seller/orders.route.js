const express = require('express');
const {
  findAllSalesController,
  newSaleController,
} = require('../../controller/seller/orders.controller');
const tokenValidator = require('../../middlewares/tokenValidator');

const salesRouter = express.Router();

salesRouter.get('/', findAllSalesController);
salesRouter.post('/', tokenValidator, newSaleController);

module.exports = salesRouter;
