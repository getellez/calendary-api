const Joi = require('joi')

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  birthdate: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  lastName: Joi.string().optional(),
  birthdate: Joi.date().optional()
})

const getUserByIdSchema = Joi.object({
  userId: Joi.string().guid({ version: ['uuidv4'] }).required()
})

module.exports = {
  getUserByIdSchema,
  createUserSchema,
  updateUserSchema
}
