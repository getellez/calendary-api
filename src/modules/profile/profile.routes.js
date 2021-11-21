const express = require('express')
const router = express.Router()
const profileController = require('./profile.controllers')

router.get('/:userId', profileController.getProfileByUserId)
router.post('/', profileController.createProfile)

module.exports = router
