const express = require('express')
const router = express.Router()

const {
  fetchCompany,
  updateCompany,
  createCompany
} = require('../controllers/companies')

router.get('/', fetchCompany)
router.put('/', updateCompany)

//? Not required.
// router.post('/', createCompany)

module.exports = router
