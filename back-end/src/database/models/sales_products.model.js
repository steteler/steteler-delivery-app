const sequelize = require('./index');
const { Model, DataTypes } = require('sequelize');

class SaleProduct extends Model { }

SaleProduct.init({
  sale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SaleProduct',
  tableName: 'sales_products',
  underscored: true,
  timestamps: false,
});

module.exports = SaleProduct;