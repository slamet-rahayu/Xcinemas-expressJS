'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shows = sequelize.define('Shows', {
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    theatre_id: DataTypes.INTEGER,
  }, {});
  Shows.associate = function(models) {
    // associations can be defined here
    Shows.belongsTo(models.movies, {
      foreignKey: 'movie_id'
    })
    Shows.belongsTo(models.Theatres, {
      foreignKey: 'theatre_id'
    })
  };
  return Shows;
};