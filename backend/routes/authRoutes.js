const express = require('express')
const router = express.Router()
const authController = require('../controllers/authControllers')

//post request for the login
router.post('/login', authController.login)
router.post('/createAdmin', authController.createAdmin)
router.get('/profile', authController.profile)
router.get('/logout', authController.logout)

module.exports = router
