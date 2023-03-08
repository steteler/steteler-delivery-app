const { findAllSalesService } = require('../../service/seller/orders.service');

const findAllSalesController = async (req, res) => {
  const sales = await findAllSalesService();
  return res.status(201).json(sales);
};

module.exports = {
  findAllSalesController,
};