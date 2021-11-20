require('dotenv').config()

const config = {
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME || 'calendary_db',
    username: process.env.DB_USERNAME || 'calendary_user',
    password: process.env.DB_PASSWORD || 's3cr3t'
  }
}

module.exports = config