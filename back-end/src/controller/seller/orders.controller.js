const {
  findAllSalesService,
  newSaleService,
  getSaleByUserId,
} = require('../../service/seller/orders.service');

const findAllSalesController = async (req, res) => {
  const sales = await findAllSalesService();
  return res.status(200).json(sales);
};

const findSaleByUserId = async (req, res) => {
  const { id } = req.params;
  const sale = await getSaleByUserId(id);
  return res.status(200).json(sale);
};

const newSaleController = async (req, res) => {
  const { type, message } = await newSaleService(req.body);
  if (type) return res.status(type).json({ message });

  return res.status(201).json({ message });
};

module.exports = {
  findAllSalesController,
  newSaleController,
  findSaleByUserId,
};
