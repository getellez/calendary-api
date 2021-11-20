const Joi = require('joi')

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  birthdate: Joi.date().required()
})

module.exports = {
  createUserSchema
}
