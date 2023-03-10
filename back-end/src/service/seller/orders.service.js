const { Sale } = require('../../database/models');

const findAllSalesService = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const newSaleService = async () => {

};

module.exports = {
  findAllSalesService,
  newSaleService
};