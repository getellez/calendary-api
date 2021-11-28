const getUsers = async (UserModel, params = {}) => {
  const users = await UserModel.findAll(params)
  return users
}

const getUserById = async (UserModel, userId) => {
  const user = await UserModel.findOne({ where: { userId } })
  return user
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
  updateUser,
  deleteUser
}
