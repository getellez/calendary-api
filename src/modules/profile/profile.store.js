const getProfileByUserId = async (ProfileModel, userId) => {
  const profile = await ProfileModel.findOne({ where: { userId }, include: 'user' })
  return profile
}

const createProfile = async (ProfileModel, payload) => {
  const profile = await ProfileModel.create(payload)
  return profile.toJSON()
}

const updateProfile = async (ProfileModel, userId, payload) => {
  const profile = await ProfileModel.update(payload, { where: { userId } })
  return profile
}

module.exports = {
  getProfileByUserId,
  createProfile,
  updateProfile
}
