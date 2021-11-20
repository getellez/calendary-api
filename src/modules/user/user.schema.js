const Joi = require('joi')

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  birthdate: Joi.date().required()
})

const getUserByIdSchema = Joi.object({
  userId: Joi.string().guid({ version: ['uuidv4'] })
})

module.exports = {
  getUserByIdSchema,
  createUserSchema
}
