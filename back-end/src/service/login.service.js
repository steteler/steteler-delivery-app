const { User } = require('../database/models/index');

async function getByEmail({ email, password }) {
  const userFound = await User.findOne({
    where: { email, password },
  });

  if (!userFound) {
    return { httpCode: 404, message: 'Not found' };
  }

  return { httpCode: 200, message: userFound };
}

module.exports = {
  getByEmail,
};