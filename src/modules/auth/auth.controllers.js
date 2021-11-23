const UserModel = require('../../models/user')
const authService = require('./auth.services')
const response = require('../../utils/responseHandler')

const createUser = async (req, res, next) => {
  try {
    const payload = req.body
    // TODO: Validate if user already exists
    const user = await authService.createUser(UserModel, payload)
    response.success(req, res, 201, user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createUser
}
