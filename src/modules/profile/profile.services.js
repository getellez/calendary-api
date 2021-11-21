const profileStore = require('./profile.store')

const getProfileByUserId = async (ProfileModel, userId) => {
  const profile = await profileStore.getProfileByUserId(ProfileModel, userId)
  return profile
}

const createProfile = async (ProfileModel, payload) => {
  const profile = await profileStore.createProfile(ProfileModel, payload)
  return profile
}

const updateProfile = async (ProfileModel, userId, payload) => {
  const profile = await profileStore.updateProfile(ProfileModel, userId, payload)
  return profile
}

module.exports = {
  getProfileByUserId,
  createProfile,
  updateProfile
}
