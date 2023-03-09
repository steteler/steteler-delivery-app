const loginService = require('../service/login.service');
const { generateToken } = require('../helpers/JWTUtils');

async function login(req, res) {
  const { email, password } = req.body;
  const { type, message } = await loginService.login(email, password);
  if (type) return res.status(type).json({ message });
  const token = generateToken(message);
  res.status(200).json({ ...message, token });
}

module.exports = {
  login,
};