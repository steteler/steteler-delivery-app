const loginService = require('../service/login.service');

async function getByEmail(req, res) {
  try {
    const { httpCode, message } = await loginService.getByEmail(req.body);
    res.status(httpCode).json(message);
  } catch (error) {
    res.status(500).json();
  }
}

module.exports = {
  getByEmail,
};