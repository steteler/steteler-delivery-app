'use strict';

const { Model } = require('sequelize');

class Product extends Model {}

Product.init({
  id: {
    type: Sequelize.INTEGER
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
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products'
  underscored: true,
  timestamps: false,
});

module.exports = Product;