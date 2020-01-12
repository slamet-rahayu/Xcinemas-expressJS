const models = require('../models')
const Shows = models.shows
const Movies = models.movies
const Theatres = models.theatres
const Seats = models.seats

exports.show = (req, res) => {
    Movies.findOne({
        where: {id: req.params.id},
        include:  [{
            model: Shows,
            include: [{
                model: Theatres
            }]
        }],
    }).then(theatres=> res.send(theatres))
}