const Joi = require('joi')

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const signupSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  birthdate: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

module.exports = {
  loginSchema,
  signupSchema
}
