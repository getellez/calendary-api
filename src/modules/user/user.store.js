const getUsers = async (UserModel, params = {}) => {
  const users = await UserModel.findAll(params)
  return users
}

const getUserById = async (UserModel, userId) => {
  const user = await UserModel.findOne({ where: { userId } })
  return user
}

const createUser = async (UserModel, payload) => {
  const user = await UserModel.create(payload)
  return user.toJSON()
}

const updateUser = async (UserModel, userId, payload) => {
  const user = await UserModel.update(payload, { where: { userId } })
  return user
}

const deleteUser = async (UserModel, userId) => {
  const user = await UserModel.destroy({ where: { userId } })
  return user
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
