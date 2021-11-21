const express = require('express')
const { schemaValidator } = require('../../middlewares')
const router = express.Router()
const userController = require('./user.controllers')
const { getUserByIdSchema } = require('./user.schema')

router.get('/', userController.getUsers)
router.get('/:userId', schemaValidator(getUserByIdSchema, 'params'), userController.getUserById)
router.post('/', userController.createUser)

module.exports = router
