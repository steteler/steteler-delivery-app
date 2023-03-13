const { Sale, Product } = require('../../database/models');

const findSaleByPk = async (id) => {
  const obj =  await Sale.findOne({
    where: { id },
    include: Product,
  });
  if (!obj) return { type: 404, message: 'Sale not found' };
  return { type: null, message: obj };
};

module.exports = {
  findSaleByPk,
};
