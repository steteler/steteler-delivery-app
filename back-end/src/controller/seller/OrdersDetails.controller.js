const { findSaleByPk} = require('../../service/seller/OrdersDetails.service');

const findSalesByPk = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await findSaleByPk(id);
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

module.exports = {
  findSalesByPk,
};