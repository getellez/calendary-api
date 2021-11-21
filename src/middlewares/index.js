const responseHandler = require('../utils/responseHandler')

const schemaValidator = (schema, source = 'body') => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req[source])
      next()
    } catch (error) {
      responseHandler.error(req, res, 400)
    }
  }
}

module.exports = {
  schemaValidator
}
