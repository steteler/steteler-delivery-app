const {
  findAllSalesService,
  newSaleService,
} = require('../../service/seller/orders.service');
const { validateToken } = require('../../helpers/JWTUtils');

const findAllSalesController = async (req, res) => {
  const sales = await findAllSalesService();
  return res.status(200).json(sales);
};

const newSaleController = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }
  validateToken(token);
  const { totalPrice, deliveryAddress, deliveryNumber, productsId, quantity } = req.body;
  const { type, message } = await newSaleService(
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    productsId,
    quantity,
  );
  if (type) return res.status(type).json({ message });

  return res.status(201).json({ ...message, token });
};

module.exports = {
  findAllSalesController,
  newSaleController,
};
