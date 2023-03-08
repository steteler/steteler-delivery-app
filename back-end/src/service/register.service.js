const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');

const md5Crypt = (param) => md5(param);

const findUser = async (name, email) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [{ name }, { email }],
    },
  });
  return user;
};

const newUser = async (name, email, password) => {
  const user = await findUser(name, email);      
  if (user) {
    return { type: 409, message: 'User already exists' };
  }
  const addUser = await User.create({ 
    name, email, password: md5Crypt(password), role: 'customer' });
  const { id: _i, password: _p, ...userData } = addUser.dataValues;
  return { type: null, message: userData };
};

const newUserByAdmin = async (name, email, password, role) => {
  const user = await findUser(name, email);      
  if (user) {
    return { type: 409, message: 'User already exists' };
  }
  await User.create({ name, email, password: md5Crypt(password), role });
  return { type: null, message: 'Success' };
};
  
module.exports = {
  newUser,
  newUserByAdmin,
};