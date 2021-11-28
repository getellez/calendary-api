const Joi = require('joi')

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
  updateUserSchema
}
