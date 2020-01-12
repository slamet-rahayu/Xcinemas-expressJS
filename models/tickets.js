'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define('Tickets', {
    show_id: DataTypes.INTEGER,
    seats_id: DataTypes.INTEGER,
    ticket_no: DataTypes.STRING
  }, {});
  Tickets.associate = function(models) {
    // associations can be defined here
    Tickets.belongsTo(models.Shows, {
      foreignKey: 'show_id'
    })
    Tickets.belongsTo(models.booking, {
      foreignKey: 'id'
    })
    Tickets.belongsTo(models.Seats, {
      foreignKey: 'seats_id'
    })
  };
  return Tickets;
};