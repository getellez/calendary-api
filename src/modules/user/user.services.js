const userStore = require('./user.store')

const getUsers = async (UserModel, params) => {
  const users = await userStore.getUsers(UserModel, params)
  return users
}

const getUserById = async (UserModel, userId) => {
  const users = await userStore.getUserById(UserModel, userId)
  return users
}

const deleteUser = async (UserModel, userId) => {
  const users = await userStore.deleteUser(UserModel, userId)
  return users
}

const createUser = async (UserModel, payload) => {
  const user = await userStore.createUser(UserModel, payload)
  return user
}

const updateUser = async (UserModel, userId, payload) => {
  const user = await userStore.updateUser(UserModel, userId, payload)
  return user
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
