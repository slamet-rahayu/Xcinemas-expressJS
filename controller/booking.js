const models = require('../models')
const tickets = models.tickets
const Users = models.users
const movies = models.movies
const booking = models.booking
const Seats = models.seats
const Shows = models.shows
const Theatres = models.theatres

exports.store = (req, res) => {
    booking.bulkCreate(req.body,{returning: true})
    .then(booking => {
        res.send({
            message:"success",
            booking
        })
    })
}

exports.show = (req, res) => {
    Shows.findOne({
        where: {id: req.params.id},
          include: [{
              model: Theatres,
              include: [{
                  model: Seats
              }]
          }]
      }).then(booking=>res.send(booking))
  }

  exports.showticket = (req, res) => {
    Shows.findOne({
        where: {id: req.params.id},
          include: [{
              model: Theatres,
              include: [{
                  model: Seats,
                  include: [{
                    model: tickets
                }]
              }]
          }]
      }).then(booking=>res.send(booking))
  }
  exports.index = (req, res) => {
    booking.findAll().then(booking=>res.send(booking))
  }