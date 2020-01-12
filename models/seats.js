'use strict';
module.exports = (sequelize, DataTypes) => {
  const seats = sequelize.define('seats', {
    theatre_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    seat_no: DataTypes.STRING
  }, {});
  seats.associate = function(models) {
    // associations can be defined here
    seats.belongsTo(models.theatres, {
      foreignKey: 'theatre_id'
    })
    seats.hasMany(models.tickets, {
      foreignKey: 'seats_id'
    })
  };
  return seats;
};