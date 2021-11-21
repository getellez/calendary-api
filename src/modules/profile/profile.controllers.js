const ProfileModel = require('../../models/profile')
const profileService = require('./profile.services')
const responseHandler = require('../../utils/responseHandler')

const getProfileByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params
    const profile = await profileService.getProfileByUserId(ProfileModel, userId)
    responseHandler.success(req, res, 200, profile)
  } catch (error) {
    next(error)
  }
}

const createProfile = async (req, res, next) => {
  try {
    const payload = req.body
    const profile = await profileService.createProfile(ProfileModel, payload)
    responseHandler.success(req, res, 200, profile)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProfileByUserId,
  createProfile
}
