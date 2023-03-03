const { newRegisterService } = require('../service/register.service');

const newRegisterController = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // const verificName = getRegisterNameService(name);
    // const verificEmail = getRegisterEmailService(email);
      
    // if (!verificName || !verificEmail) {
    //   return res.status(409).json('Conflict');
    // }
      
    await newRegisterService(name, email, password, role);
      
    return res.status(201).json('Created');
  } catch (error) {
    res.status(409).json({ error });
}
};

module.exports = {
    newRegisterController,
};