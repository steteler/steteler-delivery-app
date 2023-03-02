const { getRegisterService, newRegisterService } = require('../service/register.service');

const newRegisterController = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const verificName = getRegisterService(name);
    const verificEmail = getRegisterService(email);
      
    if (!verificName || !verificEmail) {
      return res.status(409).json('Conflict');
    }
      
    await newRegisterService(name, email, password, role);
      
    return res.status(201).json('Created');
  } catch (error) {
    res.status(409).json({ message: error.message });
}
};

module.exports = {
    newRegisterController,
};