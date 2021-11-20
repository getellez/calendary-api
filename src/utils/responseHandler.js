const success = (req, res, data, statusCode = 200, statusText = 'OK') => {
  res.status(statusCode).send({
    statusText,
    statusCode,
    data
  })
}

const error = (req, res, error, statusCode = 500, statusText = 'FAIL') => {
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