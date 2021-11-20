const UserModel = require('../../models/user')
const { createUserSchema } = require('./users.schema')
const userService = require('./users.services')
const responseHandler = require('../../utils/responseHandler')

const getUsers = async (req, res, next) => {
  try {
    const params = {}
    const users = await userService.getUsers(UserModel, params)
    responseHandler.success(req, res, users)
  } catch (error) {
    next(error)
  }
}

const createUser = async (req, res, next) => {
  try {
    const payload = req.body
    await createUserSchema.validateAsync(payload)
    const user = await userService.createUser(UserModel, payload)
    responseHandler.success(req, res, user, 201)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsers,
  createUser
}
