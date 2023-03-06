const { findAllProductsService } = require('../service/products.service');

const findAllProductsController = async (req, res) => {
  const products = await findAllProductsService();
  return res.status(201).json(products);
};

module.exports = {
  findAllProductsController,
};