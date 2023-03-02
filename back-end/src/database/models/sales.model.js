const sequelize = require('./index');
const { Model, DataTypes } = require('sequelize');
const User = require('./users.model');


class Sale extends Model {
  static associate() {
    Sale.belongsTo(User, { foreignKey: 'user_id' });
    Sale.belongsTo(User, { foreignKey: 'seller_id' });
  }
}

Sale.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
  },
  delivery_address: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  delivery_number: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  sale_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  tableName: 'sales',
  modelName: 'Sale',
});

module.exports = Sale;