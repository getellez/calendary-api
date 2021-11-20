const userRoutes = require('./users/users.routes')

const mainRouter = (app) => {
  app.use('/api/v1/users', userRoutes)

  return app
}

module.exports = {
  mainRouter
}
