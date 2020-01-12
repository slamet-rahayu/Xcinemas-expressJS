'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      censor_rating: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      producer: {
        type: Sequelize.STRING
      },
      sutradara: {
        type: Sequelize.STRING
      },
      writer: {
        type: Sequelize.STRING
      },
      production: {
        type: Sequelize.STRING
      },
      casts: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};