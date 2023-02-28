'use strict';

const { Model } = require('sequelize');
const User = require('./users.model');

class Sale extends Model {}

Sale.init({
  id: {
    type: Sequelize.INTEGER
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  seller_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: Sequelize.DECIMAL(9,2),
    allowNull: false,
  },
  delivery_address: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  delivery_number: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  sale_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  tableName: 'sales',
  modelName: 'Sale',
});

Sale.belongsTo(User, { foreignKey: 'user_id' });
Sale.belongsTo(User, { foreignKey: 'seller_id' });

module.exports = Sale;