require('express-group-routes')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')

const UserController = require('./controller/users')
const MyticketsController = require('./controller/mytickets')
const MoviesController = require('./controller/movies')
const BookingController = require('./controller/booking')
const TheatresController = require('./controller/theatres')
const AuthController = require('./controller/auth')

const cors = require('cors')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send(`youre on port ${port}`)
})

app.group('/api/v1', (router) => {
    //routing for home
    router.get('/movies', MoviesController.index)
    //route for movies
    router.get('/movies/:id', MoviesController.show)
    router.get('/theatres/:id', TheatresController.show)
    //route for booking
    router.get('/booking/:id', BookingController.show)
    router.get('/booking/', BookingController.index)
    router.post('/booking/', BookingController.store)
    // router.get('/seats/:id', TheatresController.seats)
    router.get('/myticket/:id/', BookingController.showticket)
    //routing for users
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)
    router.get('/user/:id', UserController.show)
    //routing for mytickets
    router.get('/mytickets/:id', MyticketsController.show)
    router.get('/myseats/:id', MyticketsController.showseats)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))