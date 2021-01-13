const db = require('../database/models')

const attributes = [
  'id',
  'firstName',
  'lastName',
  'age',
  'roleId',
  'designerTypeId',
  'programmingLanguageId'
]

const getEmployees = async (req, res) => {
  try {
    const data = {}
    let options = {}

    if (req.query.roleId) {
      options = { where: req.query, attributes, order: ['id'] }
    } else {
      options = { attributes, order: ['id'] }
    }

    data.employees = await db.Employee.findAll(options)

    if (data.employees.length > 1) {
      data.ageAverage = (
        data.employees.reduce(
          (average, employee) => average + employee.age,
          0
        ) / data.employees.length
      ).toFixed(2)
    }

    res.json({ error: false, data })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ error: true, data: [], msg: 'Something went wrong.' })
  }
}

const getEmployeeById = async (req, res) => {
  //TODO: check id param type
  try {
    const data = await db.Employee.findOne({
      where: { id: req.params.id },
      attributes
    })
    res.json({ error: false, data: [data] })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ error: true, data: [], msg: 'Something went wrong.' })
  }
}

const updateEmployee = async (req, res) => {
  try {
    let employee = {}
    if (req.body.firstName) employee.firstName = req.body.firstName
    if (req.body.lastName) employee.lastName = req.body.lastName
    if (req.body.age) employee.age = req.body.age
    if (req.body.roleId) employee.roleId = req.body.roleId
    if (req.body.programmingLanguageId)
      employee.programmingLanguageId = req.body.programmingLanguageId
    if (req.body.designerTypeId)
      employee.designerTypeId = req.body.designerTypeId
    const data = await db.Employee.update(employee, {
      where: { id: req.params.id },
      returning: true
    })

    res.json({ error: false })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ error: true, data: [], msg: 'Something went wrong.' })
  }
}

const createEmployee = async (req, res) => {
  try {
    const data = await db.Employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      roleId: req.body.roleId,
      designerTypeId: req.body.designerTypeId,
      programmingLanguageId: req.body.programmingLanguageId
    })
    res.json({ error: false, data })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ error: true, data: [], msg: 'Something went wrong.' })
  }
}

const deleteEmployee = async (req, res) => {
  //TODO: check id param type
  try {
    const data = await db.Employee.destroy({ id: req.params.id })
  } catch (error) {
    console.error(error)
    res
      .status(400)
      .json({ error: true, data: [], msg: 'Something went wrong.' })
  }
}

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  getEmployeeById,
  deleteEmployee
}
