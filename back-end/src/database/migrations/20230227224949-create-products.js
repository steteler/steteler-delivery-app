'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      url_image:  {
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.createTable('products')
  }
};
