const models = require('../models')
const Shows = models.shows
const movies = models.movies
const Theatres = models.theatres
const Seats = models.seats

exports.index = (req, res) => {
    movies.findAll().then(movies=>res.send(movies))
}

exports.show = (req, res)=> {
    movies.findOne({
        where: {id: req.params.id}
    }).then(movies=>res.send(movies))
}

exports.store = (req, res) => {
    movies.create(req.body)
    .then(movies => {
        res.send({
            message:"success",
            movies
        })
    })
    .catch(err=>{
        res.send({
            message: 'error',
            err
        })
    })
}