const getProfileByUserId = async (ProfileModel, userId) => {
  const profile = await ProfileModel.findOne({ where: { userId } })
  return profile
}

const createProfile = async (ProfileModel, payload) => {
  const profile = await ProfileModel.create(payload)
  return profile.toJSON()
}

module.exports = {
  getProfileByUserId,
  createProfile
}