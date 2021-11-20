const UserModel = require('../../models/user')

const getUsers = async (req, res, next) => {
  try {
    console.log('usuarios!')
    const users = await UserModel.findAll()
    res.status(200).send({
      status: 'OK',
      data: users
    })
  } catch (error) {

  }
}

const createUser = (req, res, next) => {}

module.exports = {
  getUsers,
  createUser
}
