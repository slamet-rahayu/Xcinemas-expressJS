'use strict';
module.exports = (sequelize, DataTypes) => {
  const theatres = sequelize.define('theatres', {
    location: DataTypes.STRING,
    name: DataTypes.STRING,
    phone:DataTypes.STRING,
  }, {});
  theatres.associate = function(models) {
    // associations can be defined here
    theatres.hasMany(models.seats, {
      foreignKey: 'theatre_id'
    })
    theatres.hasMany(models.shows, {
      foreignKey: 'theatre_id'
    })
    // theatres.hasMany(models.movies, {
    //   foreignKey: 'theatre_id'
    // })
  };
  return theatres;
};