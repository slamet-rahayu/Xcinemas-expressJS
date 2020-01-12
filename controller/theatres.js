const models = require('../models')
const Shows = models.shows
const Movies = models.movies
const Theatres = models.theatres
const Seats = models.seats

exports.index = (req, res) => {
    Theatres.findAll().then(theatres=> res.send(theatres))
}

exports.show = (req, res) => {
    Movies.findOne({
        where: {id: req.params.id},
        include:  [{
            model: Shows,
            include: [{
                model: Theatres
            }]
        }],
    }).then(theatres=> res.send(theatres)).catch(err=> res.send(err))
}

exports.showtheatres = (req, res) => {
    Shows.findAll({
        include: [{
            model: Theatres
        }]
    }).then(theatres=> res.send(theatres)).catch(err=>res.send(err))
}

// exports.seats = (req, res) => {
//     Theatres.findOne({
//         where: {id: req.params.id},
//         include:  [{
//             model: Seats
//         }]
//     }).then(theatres=> res.send(theatres))
// }