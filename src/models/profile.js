const sequelize = require('../utils/sequelize')
const { DataTypes } = require('sequelize')
const UserModel = require('./user')

const Profile = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: DataTypes.UUID,
    field: 'user_id',
    references: {
      model: UserModel,
      key: 'user_id'
    }
  },
  profileImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'profile_image_url'
  },
  profile_description: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'profile_description'
  },
  websiteUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'website_url'
  }
}, {
  tableName: 'profiles',
  freezeTableName: true,
  timestamps: false
})

module.exports = Profile
