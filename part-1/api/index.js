const apiRoutes = require('express').Router()

const daysRouter = require('./days')
apiRoutes.use('/days', daysRouter)

const arrayRouter = require('./array')
apiRoutes.use('/array', arrayRouter)

apiRoutes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the Phase-3 challenge Part 1 API!'})
})

module.exports = apiRoutes
