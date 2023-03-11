module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    })
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    })
  }

  return SaleProduct;
}