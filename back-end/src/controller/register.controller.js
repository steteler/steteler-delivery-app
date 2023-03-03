const { newRegisterService } = require('../service/register.service');

const newRegisterController = async (req, res) => {
  const { name, email, password, role } = req.body;
  try { 
    const retorno = await newRegisterService(name, email, password, role);
      
    return res.status(201).json(retorno);
  } catch (error) {
    res.status(409).json(error);
  }
};

module.exports = {
    newRegisterController,
};