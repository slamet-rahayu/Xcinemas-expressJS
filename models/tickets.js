'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    show_id: DataTypes.INTEGER,
    seats_id: DataTypes.INTEGER,
    ticket_no: DataTypes.STRING
  }, {});
  tickets.associate = function(models) {
    // associations can be defined here
    tickets.belongsTo(models.shows, {
      foreignKey: 'show_id'
    })
    tickets.hasMany(models.booking, {
      foreignKey: 'ticket_id'
    })
    tickets.belongsTo(models.seats, {
      foreignKey: 'seats_id'
    })
  };
  return tickets;
};