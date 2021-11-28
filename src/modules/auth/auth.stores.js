const createUser = async (UserModel, payload) => {
  const user = await UserModel.create(payload)
  return user.toJSON()
}

const getUserById = async (UserModel, email) => {
  const user = await UserModel.findOne({ where: { email } })
  return user
}

module.exports = {
  createUser,
  getUserById
}
