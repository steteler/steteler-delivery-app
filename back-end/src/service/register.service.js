const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');

const md5Crypt = (param) => md5(param);

// const getRegisterNameService = async (name) => {
//   const user = await User.findOne({ where: { name } });
//   return user;
// };

// const getRegisterEmailService = async (email) => {
//   const user = await User.findOne({ where: { email } });
//   return user;
// };

const findUser = async (name, email) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [{ name }, { email }]
    }
  });
  return user;
};

const newRegisterService = async (name, email, password, role) => {
  // const verificName = getRegisterNameService(name);
  // const verificEmail = getRegisterEmailService(email);
  const user = await findUser(name, email);      
  console.log("🚀 ~ file: register.service.js:30 ~ newRegisterService ~ user:", user)
  if (user) {
    return { type: 409, message: 'User already exists' };
  }
  const newUser = await User.create({ name, email, password: md5Crypt(password), role });
  return { type: null, message: newUser.dataValues };
};
  
module.exports = {
  newRegisterService,
};