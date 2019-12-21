const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/checker'
})

const getSessionById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM sessions WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSession = (request, response) => {
  const { model } = request.body

  pool.query('INSERT INTO sessions (model) VALUES ($1) RETURNING id', [model], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows[0])
  })
}

const updateSession = (request, response) => {
  const id = parseInt(request.params.id)
  const { model } = request.body

  pool.query(
    'UPDATE sessions SET model = $2 WHERE id = $1',
    [id, model],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Session modified with ID: ${id}`)
    }
  )
}

module.exports = {
  getSessionById,
  createSession,
  updateSession
}