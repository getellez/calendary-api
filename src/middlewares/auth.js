const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const authStore = require('../modules/auth/auth.stores')
const UserModel = require('../models/user')

passport.use('login',
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    const user = await authStore.getUserById(UserModel, email)
    if (!user) {
      return done(null, false, { message: 'User not found' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return done(null, false, { message: 'Wrong  password' })
    }

    return done(null, user, { message: 'Login successful' })
  })
)
