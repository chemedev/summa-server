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
      options = { where: req.query, attributes }
    } else {
      options = { attributes }
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
    if (!req.body.name) throw 'Name field must be provided.'
    const data = await db.Employy.update(
      { name: req.body.name },
      { where: { id: 1 }, returning: true }
    )
    res.json({ error: false, data: data[1] })
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
      name: req.body.name
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
