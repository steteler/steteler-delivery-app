const { Sale, User, SaleProduct } = require('../../database/models');
const { Op } = require('sequelize');

const findAllSalesService = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user
};

const findByName = async (name, role) => {
  const seller = await User.findOne({
    where: {
      [Op.and]: [{ name }, { role }],
    }
  });
  return seller;
};

const newSaleService = async (
  email, seller, address, number, total, productsIds, quantity
) => {
  const userByEmail = await findByEmail(email);
  const sellerByName = await findByName(seller, 'seller');
  if (!sellerByName) return { type: 404, message: 'User not found' }
  const objSale = {
    user_id: userByEmail.id,
    seller_id: sellerByName.id,
    total_price: total,
    delivery_address: address,
    delivery_number: number,
    sale_date: Date.now(),
    status: 'Pendente',
  };
  const newSale = await Sale.create(objSale);
  console.log('new', newSale);
  const newSaleProduct = productsIds.map(async (pId, i) => {
    await SaleProduct.create({
      sale_id: newSale.id,
      product_id: pId,
      quantity: quantity[i],
    })
  })

  if (!newSaleProduct) return null;
  return { type: null, message: newSale.id };
};

module.exports = {
  findAllSalesService,
  newSaleService,
};
