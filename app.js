const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')

const { mainRouter } = require('./src/modules')

let app = express()

require('./src/middlewares/auth')

app.use(passport.initialize())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app = mainRouter(app)

module.exports = app
