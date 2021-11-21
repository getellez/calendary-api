const responseHandler = require('../utils/responseHandler')

const validateSchema = (schema, data) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req[data])
      next()
    } catch (error) {
      responseHandler.error(req, res, 400)
    }
  }
}

module.exports = {
  validateSchema
}
