module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, { foreignKey: 'user_id' });
    User.hasMany(Sale, { foreignKey: 'seller_id' });
  }

  return User;
}
