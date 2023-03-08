const { findAllSalesService } = require('../../service/seller/orders.service');

const findAllSalesController = async (req, res) => {
  const sales = await findAllSalesService();
  return res.status(200).json(sales);
};

module.exports = {
  findAllSalesController,
};