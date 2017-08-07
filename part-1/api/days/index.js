const daysRouter = require('express').Router()

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

daysRouter.get('/', (req, res) => {
  res.send(daysOfWeek)
})

daysRouter.get('/:day', (req, res, next) => {
  const day = req.params.day.toLowerCase()
  if (!daysOfWeek.hasOwnProperty(day)) {
    const err = new Error(`'${day}' is not a valid day!`)
    err.status = 400
    next(err)
  }
  res.send(`${daysOfWeek[day]}`)
})

daysRouter.use((err, req, res, next) => {
  console.log( 'err:', err )
  res.status(err.status).send(err.message)
})

module.exports = daysRouter
