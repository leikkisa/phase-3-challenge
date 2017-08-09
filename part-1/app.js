const app = require('express')()
const apiRoutes = require('./api')

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
  res.send('Connected to the Phase-3 challenge Part 1! Try visiting the path /api :-)')
})

app.listen(3001, () => {
  console.log('LG Phase-3 Interview, Part-1 is running on localhost:3001')
})
