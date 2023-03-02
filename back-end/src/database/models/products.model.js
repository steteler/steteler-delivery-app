const sequelize = require('./index');
const { Model, DataTypes } = require('sequelize');

class Product extends Model { }

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
  },
  url_image: {
    type: DataTypes.STRING(200),
    allowNull: false,
    defaultValue: '',
  },
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products',
  underscored: true,
  timestamps: false,
});


