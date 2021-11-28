const express = require('express')
const router = express.Router()
const authController = require('./auth.controllers')
const { schemaValidator } = require('../../middlewares')
const { loginSchema, signupSchema } = require('./auth.schemas')

router.post('/login', schemaValidator(loginSchema), authController.login)
router.post('/signup', schemaValidator(signupSchema), authController.signup)

module.exports = router
