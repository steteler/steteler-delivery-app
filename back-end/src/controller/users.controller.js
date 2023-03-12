const { findAllUserService } = require('../service/users.service');

const findAllUserController = async (req, res) => {
  const sales = await findAllUserService();
  return res.status(200).json(sales);
};

module.exports = {
  findAllUserController,
};
