const success = (req, res, statusCode = 200, data = '', statusText = 'OK') => {
  res.status(statusCode).send({
    statusText,
    statusCode,
    data
  })
}

const error = (req, res, statusCode = 500, error = '', statusText = 'FAIL') => {
  res.status(statusCode).send({
    statusText,
    statusCode,
    error
  })
}

module.exports = {
  success,
  error
}
