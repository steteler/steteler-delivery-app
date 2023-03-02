const User = require('../database/models/users.model');

class LoginService {
  static async getByEmail(user) {
    // const { email, senha } = user;

    // const userFound = await User.findOne({
    //   where: { email, senha },
    // });

    // return userFound;

    const userFound = await User.findAll();

    return userFound;
  }
}

module.exports = LoginService;