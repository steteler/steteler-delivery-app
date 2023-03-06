const { Product } = require('../database/models');

const findAllProductsService = async () => {
  const products = await Product.findAll();
  return products;
};

module.exports = {
  findAllProductsService,
};