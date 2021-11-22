const Joi = require('joi')

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  birthdate: Joi.date().required()
})

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  last_name: Joi.string().optional(),
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
