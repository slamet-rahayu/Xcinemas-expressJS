const models = require('../models')
const tickets = models.tickets
const Users = models.users
const movies = models.movies
const booking = models.booking
const Seats = models.seats
const Shows = models.shows
const Theatres = models.theatres

exports.show = (req, res) => {
    Users.findOne({
        where: {id: req.params.id},
          include: [{
              model: booking,
              include: [{
                model: tickets,
                include: [{
                  model: Shows,
                  include: [{
                    model: movies
                }]
              }]
            }]
          }]
      }).then(booking=>res.send(booking)).catch(err=>res.send(err))
  }

  exports.showseats = (req, res) => {
    Users.findOne({
        where: {id: req.params.id},
          include: [{
              model: booking,
              include: [{
                model: tickets,
                include: [{
                  model: Seats,
                  include: [{
                    model: Theatres
                }]
              }]
            }]
          }]
      }).then(booking=>res.send(booking)).catch(err=>res.send(err))
  }