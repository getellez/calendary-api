const createUser = async (UserModel, payload) => {
  const user = await UserModel.create(payload)
  return user.toJSON()
}

module.exports = {
  createUser
}
