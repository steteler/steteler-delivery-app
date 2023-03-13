const express = require('express');
const {
  findSalesByPk
} = require('../../controller/seller/OrdersDetails.controller');

const salesDetailsRouter = express.Router();

salesDetailsRouter.get('/:id', findSalesByPk);

module.exports = salesDetailsRouter;