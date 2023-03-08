'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 2,
        seller_id: 3,
        total_price: 23.80,
        delivery_address: 'Rua Irmãos Monteiro, Bairro Pedras',
        delivery_number: '851',
        sale_date: new Date('08/04/21'),
        status: 'PENDENTE',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 14.20,
        delivery_address: 'Rua Vila Bela, Bairro Gurupi',
        delivery_number: '670',
        sale_date: new Date('08/04/21'),
        status: 'PREPARANDO',
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {})
  }
};
