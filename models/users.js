'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dateOfBirth:DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.INTEGER,
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.booking, {
      foreignKey: 'user_id'
    })
    // users.hasMany(models.payment, {
    //   foreignKey: 'orderBy'
    // })
  };
  return users;
};