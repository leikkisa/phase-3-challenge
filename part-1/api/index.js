const apiRoutes = require('express').Router()

const daysRouter = require('./days')
apiRoutes.use('/days', daysRouter)

const arrayRouter = require('./array')
apiRoutes.use('/array', arrayRouter)

apiRoutes.get('/', (req, res) => {
  res.send('Connected to the Phase-3 challenge Part 1 API! Try visiting the paths /days or /array :-)')
})

module.exports = apiRoutes
