'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', { 
      sale_id: {
        type: Sequelize.INTEGER
      },
      product_id:{
        type: Sequelize.INTEGER
      },
      quantity:{
        type: Sequelize.INTEGER
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};
