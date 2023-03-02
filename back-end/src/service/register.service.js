const { User } = require('../database/models');

const newRegisterService = async (name, email, password, role) => {
  const newUser = await User.create({ name, email, password, role });
  return newUser;
};
  
const getRegisterService = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

module.exports = {
  newRegisterService,
  getRegisterService,
};