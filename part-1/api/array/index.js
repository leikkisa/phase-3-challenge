const arrayRouter = require('express').Router()
const bodyParser = require('body-parser')

arrayRouter.use(bodyParser.json())

arrayRouter.get('/', (req, res) => {
  res.send('Hi there! Try posting JSON with some arrays to the path /array/concat :-)')
})

arrayRouter.post('/concat', (req, res, next) => {
  const arraysToConcat = req.body
  let concattedArrays = [ ]
  for (let arr in arraysToConcat) {
    if (!Array.isArray(arraysToConcat[arr])) {
      const err = new Error(`Input data should be of type Array. Check the format of '${arr}'.`)
      err.status = 400
      next(err)
    }
    concattedArrays = concattedArrays.concat(arraysToConcat[arr])
  }
  res.json({ "result": concattedArrays })
})

arrayRouter.use((err, req, res, next) => {
  console.log( 'err:', err )
  res.status(err.status).json({ "error": err.message })
})

module.exports = arrayRouter
