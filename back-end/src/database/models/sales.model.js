module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
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
    underscored: true,
    timestamps: false,
    tableName: 'sales',
  });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, { foreignKey: 'user_id' });
    Sale.belongsTo(User, { foreignKey: 'seller_id' });
  }

  return Sale;
}