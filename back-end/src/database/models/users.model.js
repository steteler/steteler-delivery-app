'use strict';

const { Model, DataTypes } = require('sequelize');
const Sale = require('./sales.model');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: false,
});

User.hasMany(Sale, { foreignKey: 'user_id' });
User.hasMany(Sale, { foreignKey: 'seller_id' });

module.exports = User