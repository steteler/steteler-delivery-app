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

const newRegisterService = async (name, email, password) => {
  const user = await findUser(name, email);      
  // console.log('🚀 ~ file: register.service.js:30 ~ newRegisterService ~ user:', user);
  if (user) {
    return { type: 409, message: 'User already exists' };
  }
  const newUser = await User.create({ 
    name, email, password: md5Crypt(password), role: 'customer' });
  const { id: _i, password: _p, ...userData } = newUser.dataValues;
  return { type: null, message: userData };
};
  
module.exports = {
  newRegisterService,
};