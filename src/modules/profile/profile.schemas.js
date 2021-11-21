const Joi = require('joi')

const getProfileSchema = Joi.object({
  userId: Joi.string().guid({ version: ['uuidv4'] }).required()
})

const createProfileSchema = Joi.object({
  userId: Joi.string().guid({ version: ['uuidv4'] }).optional(),
  profileImageUrl: Joi.string().optional(),
  profileDescription: Joi.string().optional(),
  websiteUrl: Joi.string().optional()
})

const updateProfileSchema = Joi.object({
  profileImageUrl: Joi.string().optional(),
  profileDescription: Joi.string().optional(),
  websiteUrl: Joi.string().optional()
})

module.exports = {
  createProfileSchema,
  updateProfileSchema,
  getProfileSchema
}
