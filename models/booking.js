'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    user_id: DataTypes.INTEGER,
    ticket_id: DataTypes.INTEGER,
    booking_date: DataTypes.DATE
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
    booking.belongsTo(models.Tickets, {
      foreignKey: 'ticket_id'
    })
  };
  return booking;
};