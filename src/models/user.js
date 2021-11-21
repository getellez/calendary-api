const sequelize = require('../utils/sequelize')
const { DataTypes } = require('sequelize')

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
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'birth_date'
  }
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

module.exports = User
