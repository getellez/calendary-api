const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const response = require('../../utils/responseHandler')
const authController = require('./auth.controllers')
const { schemaValidator } = require('../../middlewares')
const { createUserSchema } = require('../user/user.schema')

router.post('/signup', schemaValidator(createUserSchema), authController.createUser)

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const customError = new Error('User does not exist')
        next(customError)
      }

      req.login(user, { session: false }, async (err) => {
        if (err) {
          return next(err)
        }
        const payload = {
          id: user.id,
          email: user.email
        }

        const token = jwt.sign({ user: payload }, 'secret')
        response.success(req, res, 200, token)
      })
    } catch (error) {
      next(error)
    }
  })(req, res, next)
})

module.exports = router
