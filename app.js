const express = require('express')

const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { mainRouter } = require('./src/modules')

let app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app = mainRouter(app)

module.exports = app
