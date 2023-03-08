const { Sale } = require('../../database/models');

const findAllSalesService = async () => {
  const sales = await Sale.findAll();
  return sales;
};

module.exports = {
  findAllSalesService,
};