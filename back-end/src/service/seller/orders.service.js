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

const newSaleService = async (
  email,
  seller,
  address,
  number,
  total,
  productsIds,
  quantity
) => {
  const userByEmail = await findByEmail(email);
  const sellerByName = await findByName(seller, 'seller');
  // const objSale = {
  //   user_id: userByEmail.id,
  //   seller_id: sellerByName.id,
  //   total_price: total,
  //   delivery_address: address,
  //   delivery_number: number,
  //   sale_date: Date.now(),
  //   status: 'Pendente',
  // };
  const newSale = await Sale.create({
    userId: userByEmail.id,
    sellerId: sellerByName.id,
    totalPrice: total,
    deliveryAddress: address,
    deliveryNumber: number,
    saleDate: Date.now(),
    status: 'Pendente',
  });
  const newSaleProduct = productsIds.map(async (pId, i) => {
    await SaleProduct.create({
      sale_id: newSale.id,
      product_id: pId,
      quantity: quantity[i],
    });
  });

  if (!newSaleProduct) return null;
  return { type: null, message: newSale.id };
};

module.exports = {
  findAllSalesService,
  newSaleService,
};
