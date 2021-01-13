const express = require('express')
const router = express.Router()

const {
  getEmployees,
  createEmployee,
  updateEmployee,
  getEmployeeById,
  deleteEmployee
} = require('../controllers/employees')

router.get('/', getEmployees)
router.post('/', createEmployee)
router.put('/:id', updateEmployee)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployee)

module.exports = router
