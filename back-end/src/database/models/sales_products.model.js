'use strict';

const { Model } = require('sequelize');

class SaleProduct extends Model {}

SaleProduct.init({
  sale_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  product_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SaleProduct',
  tableName: 'sales_products',
  underscored: true,
  timestamps: false,
});

module.exports = SaleProduct