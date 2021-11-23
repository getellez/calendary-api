const sequelize = require('../utils/sequelize')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
    field: 'user_id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email'
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'birth_date'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password'
  }
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

User.addHook('beforeCreate', async (user) => {
  const securedPassword = await bcrypt.hash(user.password, 10)
  user.password = securedPassword
})

module.exports = User
