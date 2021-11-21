const sequelize = require('../utils/sequelize')
const { DataTypes } = require('sequelize')
const UserModel = require('./user')

const Profile = sequelize.define('profile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: DataTypes.UUID,
    field: 'user_id'
  },
  profileImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'profile_image_url'
  },
  profileDescription: {
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
  timestamps: false
})

Profile.belongsTo(UserModel, {
  foreignKey: {
    name: 'user_id',
    type: DataTypes.UUID
  },
  as: 'user'
})

module.exports = Profile
