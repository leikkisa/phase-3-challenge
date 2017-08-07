const app = require('express')()
const apiRoutes = require('./api')

app.use('/api', apiRoutes)

app.listen(3001, () => {
  console.log('LG Phase-3 Interview, Part-1 is running on localhost:3001')
})
