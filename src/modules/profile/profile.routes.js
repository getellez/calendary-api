const express = require('express')
const { schemaValidator } = require('../../middlewares')
const router = express.Router()
const profileController = require('./profile.controllers')
const { createProfileSchema, updateProfileSchema, getProfileSchema } = require('./profile.schemas')

router.get('/:userId', schemaValidator(getProfileSchema, 'params'), profileController.getProfileByUserId)
router.post('/', schemaValidator(createProfileSchema), profileController.createProfile)
router.put('/:userId', schemaValidator(updateProfileSchema), profileController.updateProfile)

module.exports = router
