'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seats = sequelize.define('Seats', {
    theatre_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    seat_no: DataTypes.STRING
  }, {});
  Seats.associate = function(models) {
    // associations can be defined here
    Seats.belongsTo(models.Theatres, {
      foreignKey: 'theatre_id'
    })
    Seats.hasMany(models.Tickets, {
      foreignKey: 'seats_id'
    })
  };
  return Seats;
};