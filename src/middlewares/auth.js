const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
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

passport.use(new JWTStrategy({
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
  try {
    return done(null, token.user)
  } catch (error) {
    done(error)
  }
}))
