'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
      },
      url_image:  {
        type: Sequelize.STRING(200),
        allowNull: false,
        defaultValue: '',
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.createTable('products')
  }
};
