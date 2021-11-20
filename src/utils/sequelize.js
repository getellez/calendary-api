const { Sequelize } = require('sequelize/dist')
const { db } = require('../config')

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: 'postgres',
  logging: false,
  sync: {
    force: true
  }
})

module.exports = sequelize
