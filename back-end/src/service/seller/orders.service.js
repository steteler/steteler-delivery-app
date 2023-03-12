const { Op } = require('sequelize');
const { Sale, User, SaleProduct } = require('../../database/models');

const findAllSalesService = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const findByName = async (name, role) => {
  const seller = await User.findOne({
    where: {
      [Op.and]: [{ name }, { role }],
    },
  });
  if (!seller) return { type: 404, message: 'User not found' };
  return seller;
};

const newSaleProducts = async (saleId, productsIds, quantity) => {
  const newProds = await Promise.all(
    productsIds.map(async (pId, i) => {
      const prod = await SaleProduct.create({
        saleId,
        productId: pId,
        quantity: quantity[i],
      });
      return prod;
    }),
  );
  if (!newProds) return { type: 500, message: 'Error inserting products' };
};

const newSaleService = async (saleData) => {
  const { email, seller, address, number, total, productsIds, quantity } = saleData;
  const userByEmail = await findByEmail(email);
  const sellerByName = await findByName(seller, 'seller');
  const newSale = await Sale.create({
    userId: userByEmail.id,
    sellerId: sellerByName.id,
    totalPrice: total,
    deliveryAddress: address,
    deliveryNumber: number,
    saleDate: Date.now(),
    status: 'Pendente',
  });
  await newSaleProducts(newSale.id, productsIds, quantity);
  return { type: null, message: newSale.id };
};

const getSaleByUserId = async (userId) => {
  const sale = await Sale.findAll({ where: { userId } });
  if (!sale) return { type: 404, message: 'Sale not found' };
  return sale;
};

module.exports = {
  findAllSalesService,
  newSaleService,
  getSaleByUserId,
};
