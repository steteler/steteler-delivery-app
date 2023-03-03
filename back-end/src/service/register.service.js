const md5 = require('md5');
const { User } = require('../database/models');

const md5Crypt = (param) => md5(param);

const getRegisterNameService = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const getRegisterEmailService = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const newRegisterService = async (name, email, password, role) => {
  const verificName = getRegisterNameService(name);
  const verificEmail = getRegisterEmailService(email);
      
  if (!verificName || !verificEmail) {
    return 'Conflict';
  }

  await User.create({ name, email, password: md5Crypt(password), role });
  return 'Create';
};
  
module.exports = {
  newRegisterService,
  getRegisterNameService,
  getRegisterEmailService,
};