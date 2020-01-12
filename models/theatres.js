'use strict';
module.exports = (sequelize, DataTypes) => {
  const Theatres = sequelize.define('Theatres', {
    location: DataTypes.STRING,
    name: DataTypes.STRING,
    phone:DataTypes.STRING,
  }, {});
  Theatres.associate = function(models) {
    // associations can be defined here
    Theatres.hasMany(models.Seats, {
      foreignKey: 'theatre_id'
    })
    Theatres.hasMany(models.Shows, {
      foreignKey: 'theatre_id'
    })
    // theatres.hasMany(models.movies, {
    //   foreignKey: 'theatre_id'
    // })
  };
  return Theatres;
};