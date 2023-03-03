const md5 = require('md5');
const { User } = require('../database/models');

const md5Crypt = (toEncrypt) => {
    const crypto = md5(toEncrypt);
    return crypto;
};

const newRegisterService = async (name, email, password, role) => {
  const newUser = await User.create({ name, email, password: md5Crypt(password), role });
  console.log(newUser);
  return newUser;
};
  
// const getRegisterNameService = async (name) => {
//   const user = await User.findOne({ where: { name } });
//   return user;
// };

// const getRegisterEmailService = async (name) => {
//     const user = await User.findOne({ where: { name } });
//     return user;
// };

module.exports = {
  newRegisterService,
//   getRegisterNameService,
//   getRegisterEmailService,
};