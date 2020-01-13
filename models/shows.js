'use strict';
module.exports = (sequelize, DataTypes) => {
  const shows = sequelize.define('shows', {
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    theatre_id: DataTypes.INTEGER,
  }, {});
  shows.associate = function(models) {
    // associations can be defined here
    shows.belongsTo(models.movies, {
      foreignKey: 'movie_id'
    })
    shows.belongsTo(models.theatres, {
      foreignKey: 'theatre_id'
    })
    shows.hasMany(models.tickets, {
      foreignKey:   'show_id'
    })
  };
  return shows;
};