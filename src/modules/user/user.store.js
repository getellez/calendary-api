const getUsers = async (UserModel, params = {}) => {
  const users = await UserModel.findAll(params)
  return users
}

const createUser = async (UserModel, payload) => {
  const user = await UserModel.create(payload)
  return user.toJSON()
}

module.exports = {
  getUsers,
  createUser
}
