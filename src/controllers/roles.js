const db = require('../database/models')

const getRoles = async (req, res) => {
  try {
    const { role } = req.params
    let query
    if (role === 'designer') query = 'DesignerType'
    else if (role === 'developer') query = 'ProgrammingLanguage'

    const data = await db[query].findAll({ attributes: ['id', 'name'] })
    res.json({ error: false, data })
  } catch (error) {
    console.error(error)
    res.json({ error: true, data: [], msg: error })
  }
}

module.exports = { getRoles }
