const { newRegisterService } = require('../service/register.service');
const { generateToken } = require('../helpers/JWTUtils');

const newRegisterController = async (req, res) => {
  const { name, email, password } = req.body;
  const { type, message } = await newRegisterService(name, email, password);
  if (type) return res.status(type).json({ message });
  const token = generateToken(message);
  return res.status(201).json({ ...message, token });
};

module.exports = {
    newRegisterController,
};