const authRoutes = require('./auth/auth.routes')
const userRoutes = require('./user/user.routes')
const profileRoutes = require('./profile/profile.routes')

const mainRouter = (app) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/users', userRoutes)
  app.use('/api/v1/profiles', profileRoutes)
  return app
}

module.exports = {
  mainRouter
}
