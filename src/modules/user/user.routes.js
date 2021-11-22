const express = require('express')
const { schemaValidator } = require('../../middlewares')
const router = express.Router()
const userController = require('./user.controllers')
const { getUserByIdSchema, createUserSchema, updateUserSchema } = require('./user.schema')

router.get('/', userController.getUsers)
router.get('/:userId', schemaValidator(getUserByIdSchema, 'params'), userController.getUserById)
router.post('/', schemaValidator(createUserSchema, 'body'), userController.createUser)
router.delete('/:userId', schemaValidator(getUserByIdSchema, 'params'), userController.deleteUser)
router.put('/:userId',
  schemaValidator(getUserByIdSchema, 'params'),
  schemaValidator(updateUserSchema, 'body'),
  userController.updateUser
)

module.exports = router
