const {
  findAllSalesService,
  newSaleService,
} = require('../../service/seller/orders.service');

const findAllSalesController = async (req, res) => {
  const sales = await findAllSalesService();
  return res.status(200).json(sales);
};

const newSaleController = async (req, res) => {
  console.log('aqui');
  const { email, seller, address, number, total, productsIds, quantity } = req.body;
  const { type, message } = await newSaleService(
    email, seller, address, number, total, productsIds, quantity,
  );
  if (type) return res.status(type).json({ message });

  return res.status(201).json({ message });
};

module.exports = {
  findAllSalesController,
  newSaleController,
};
