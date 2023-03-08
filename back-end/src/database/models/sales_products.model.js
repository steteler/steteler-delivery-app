module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
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
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    })
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    })
  }

  return SaleProduct;
}