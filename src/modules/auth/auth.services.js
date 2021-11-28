const authStore = require('./auth.stores')

const createUser = async (UserModel, payload) => {
  const user = await authStore.createUser(UserModel, payload)
  return user
}

const getUserById = async (UserModel, email) => {
  const user = await authStore.getUserById(UserModel, email)
  return user
}

module.exports = {
  createUser,
  getUserById
}
