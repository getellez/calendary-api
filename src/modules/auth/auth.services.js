const authStore = require('./auth.stores')

const createUser = async (UserModel, payload) => {
  const user = await authStore.createUser(UserModel, payload)
  return user
}

module.exports = {
  createUser
}
