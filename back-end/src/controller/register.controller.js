const registerService = require('../service/register.service');
const { generateToken } = require('../helpers/JWTUtils');

const newUser = async (req, res) => {
  const { name, email, password } = req.body;
  const { type, message } = await registerService.newUser(name, email, password);
  if (type) return res.status(type).json({ message });
  const token = generateToken(message);
  return res.status(201).json({ ...message, token });
};

const newUserByAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { type, message } = await registerService.newUserByAdmin(name, email, password, role);
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  newUser,
  newUserByAdmin,
};