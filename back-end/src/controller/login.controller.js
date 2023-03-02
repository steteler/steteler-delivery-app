const LoginService = require('../service/login.service');

class LoginController {
  static async getByEmail(req, res) {
    const userFound = await LoginService.getByEmail(req.body);

    res.status(200).json(userFound.password);
  }
}

module.exports = LoginController;