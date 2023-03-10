const { User } = require('../database/models');

const findAllUserService = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  findAllUserService
};
