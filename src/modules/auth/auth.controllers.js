const UserModel = require('../../models/user')
const authService = require('./auth.services')
const response = require('../../utils/responseHandler')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const signup = async (req, res, next) => {
  try {
    const payload = req.body
    const { email } = req.body
    let user = await authService.getUserById(UserModel, email)
    if (user) {
      return response.error(req, res, 409, 'This user already exists')
    }
    user = await authService.createUser(UserModel, payload)
    response.success(req, res, 201, user)
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
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
          name: user.name,
          lastName: user.lastName,
          email: user.email

        }

        const token = jwt.sign({ user: payload }, 'secret')
        response.success(req, res, 200, { token })
      })
    } catch (error) {
      next(error)
    }
  })(req, res, next)
}

module.exports = {
  signup,
  login
}
