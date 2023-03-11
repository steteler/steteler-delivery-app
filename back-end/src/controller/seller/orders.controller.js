const {
  findAllSalesService,
  newSaleService,
} = require('../../service/seller/orders.service');

const findAllSalesController = async (req, res) => {
  const sales = await findAllSalesService();
  return res.status(200).json(sales);
};

const newSaleController = async (req, res) => {
  const { type, message } = await newSaleService(req.body);
  if (type) return res.status(type).json({ message });

  return res.status(201).json({ message });
};

module.exports = {
  findAllSalesController,
  newSaleController,
};
