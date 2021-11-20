const userStore = require('./user.store')

const getUsers = async (UserModel, params) => {
  const users = await userStore.getUsers(UserModel, params)
  return users
}

const getUserById = async (UserModel, userId) => {
  const users = await userStore.getUserById(UserModel, userId)
  return users
}

const createUser = async (UserModel, payload) => {
  payload.birthdate = new Date(payload.birthdate)
  const user = await userStore.createUser(UserModel, payload)
  return user
}

module.exports = {
  getUsers,
  getUserById,
  createUser
}
