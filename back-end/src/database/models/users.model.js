'use strict';

const { Model } = require('sequelize');
const Sale = require('./sales.model');

class User extends Model {}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
  underscored: true,
  timestamps: false,
});

User.hasMany(Sale, { foreignKey: 'user_id' });
User.hasMany(Sale, { foreignKey: 'seller_id' });

module.exports = User