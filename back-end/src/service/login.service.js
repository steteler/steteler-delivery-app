const md5 = require('md5');
const { User } = require('../database/models/index');

const md5Crypt = (param) => md5(param);

async function getByEmail(email) {
  const userFound = await User.findOne({
    where: { email },
  });

  return userFound;
};

async function login (email, password) {
  const getUser = await getByEmail(email);
  if (!getUser) return { type: 404, message: 'User not found' };

  const incomingPasswd = md5Crypt(password);
  const userPasswd = getUser.dataValues.password;

  if (incomingPasswd !== userPasswd) return { type: 404, message: 'Incorrect password' };

  const { id: _i, password: _p, ...userData } = getUser.dataValues;
  return { type: null, message: userData };
}

module.exports = {
  login,
};