const express = require('express')
const passport = require('passport')
const userController = require('./user.controllers')
const { schemaValidator } = require('../../middlewares')
const { getUserByIdSchema, updateUserSchema } = require('./user.schema')

const router = express.Router()

router.get('/', 
  passport.authenticate('jwt', { session: false }),
  userController.getUsers
)

router.get('/:userId', 
  passport.authenticate('jwt', { session: false }),
  schemaValidator(getUserByIdSchema, 'params'), 
  userController.getUserById
)

router.delete('/:userId', 
  passport.authenticate('jwt', { session: false }),
  schemaValidator(getUserByIdSchema, 'params'), 
  userController.deleteUser
)

router.put('/:userId',
  passport.authenticate('jwt', { session: false }),
  schemaValidator(getUserByIdSchema, 'params'),
  schemaValidator(updateUserSchema, 'body'),
  userController.updateUser
)

module.exports = router
