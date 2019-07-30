const express = require('express')
const router = express.Router()
const { signup, login, logout, profile } = require('../controllers/authControllers')
const passport = require('passport')

router.post('/signup',signup)

router.post('/login',passport.authenticate('local'), login)

router.post('/logout', logout)

router.get('/profile',isLogged, profile)

function isLogged(req, res, next) {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: "You're not logged" })
  next()
}


module.exports = router


