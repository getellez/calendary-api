const UserModel = require('../../models/user')
const userService = require('./user.services')
const responseHandler = require('../../utils/responseHandler')

const getUsers = async (req, res, next) => {
  try {
    const params = {}
    const users = await userService.getUsers(UserModel, params)
    responseHandler.success(req, res, 200, users)
  } catch (error) {
    next(error)
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params
    const user = await userService.getUserById(UserModel, userId)
    responseHandler.success(req, res, 200, user)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params
    const payload = req.body
    const user = await userService.updateUser(UserModel, userId, payload)
    responseHandler.success(req, res, 201, user)
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params
    const user = await userService.deleteUser(UserModel, userId)
    responseHandler.success(req, res, 200, user)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
}
