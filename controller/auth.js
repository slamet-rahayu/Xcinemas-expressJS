const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.users

process.env.SECRET_KEY = 'pssst!'

exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({where: {email,password}}).then(user=>{
        if(user) {
            const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY)
            res.send({
                token,
                user
            })
        }else{
            res.json({error: "invalid email and/or password."})
        }
    }).catch(err=> {
        res.status(400).json({error: err})
    })
}

exports.register = (req, res) => {
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        phone: req.body.phone,
        password: req.body.password
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=> {
        if(!user) {
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + 'registered'})
                    res.send('user', user)
                }).catch(err => {
                    res.send('error:' + err)
              })
            
        }else{
            res.json({error: 'User already registered'})
        }
    }).catch(err=> {
        res.send('error:' + err)
    })
}