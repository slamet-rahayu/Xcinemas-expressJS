const models = require('../models')
const Users = models.users
const movies = models.movies
const payment = models.payment
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'pssst!'

exports.index = (req, res) => {
    Users.findAll().then(data=> res.send(data))
}

exports.show = (req, res) => {
    Users.findOne({
        where: {id: req.params.id}
    }).then(user=> res.send(user))
}