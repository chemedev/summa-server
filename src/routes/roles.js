const express = require('express')
const router = express.Router()

const { getRoles } = require('../controllers/roles')

router.get('/:role', getRoles)

module.exports = router
