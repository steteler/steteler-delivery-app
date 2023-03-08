const { findAllProductsService } = require('../../service/customer/products.service');

const findAllProductsController = async (req, res) => {
  const products = await findAllProductsService();
  return res.status(200).json(products);
};

module.exports = {
  findAllProductsController,
};