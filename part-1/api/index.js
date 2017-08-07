const apiRoutes = require('express').Router()

const daysRoutes = require('./days')
apiRoutes.use('/days', daysRoutes)

const arrayRoutes = require('./array')
apiRoutes.use('/array', arrayRoutes)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the Phase-3 challenge Part 1 API!'})
})

module.exports = apiRoutes
