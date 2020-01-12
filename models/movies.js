'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    censor_rating: DataTypes.STRING,
    duration:DataTypes.INTEGER,
    producer: DataTypes.STRING,
    sutradara: DataTypes.STRING,
    writer: DataTypes.STRING,
    production: DataTypes.STRING,
    casts: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,
    img: DataTypes.STRING,
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
    // movies.hasMany(models.favourites, {
    //   foreignKey: 'movies_id'
    // })
    movies.hasMany(models.shows, {
      foreignKey: 'movie_id'
    })
    movies.belongsTo(models.theatres, {
      foreignKey: 'theatre_id'
    })
  };
  return movies;
};
