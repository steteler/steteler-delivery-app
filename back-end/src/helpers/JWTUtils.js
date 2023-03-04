require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret_key';

const generateToken = (data) => jwt.sign(
  { data },
  secret,
  {
    algorithm: 'HS256',
    expiresIn: '7d',
  },
);

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, secret);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = { generateToken, validateToken };
