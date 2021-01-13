const db = require('../database/models')

const fetchCompany = async (req, res) => {
  try {
    const data = await db.Company.findOne({})
    res.json({ error: false, data: [data] })
  } catch (error) {
    console.error(error)
    res.json({ error: true, data: [], msg: error })
  }
}

const updateCompany = async (req, res) => {
  try {
    if (!req.body.name) throw 'Name field must be provided.'
    const data = await db.Company.update(
      { name: req.body.name },
      { where: { id: 1 }, returning: true }
    )
    res.json({ error: false, data: data[1] })
  } catch (error) {
    console.error(error)
    res.json({ error: true, data: [], msg: error })
  }
}

//? Not required.
const createCompany = async (req, res) => {
  try {
    const data = await db.Company.create({
      name: req.body.name
    })
    res.json({ error: false, data })
  } catch (error) {
    console.error(error)
    res.json({ error: true, data: [], msg: error })
  }
}

module.exports = { fetchCompany, updateCompany, createCompany }
