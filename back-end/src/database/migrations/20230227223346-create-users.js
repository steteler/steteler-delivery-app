'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.crateTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING

      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
