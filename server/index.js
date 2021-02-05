//--------------------------------DO NOT MODIFY ANYTHING HERE--------------------------------//

const express = require('express')
const bodyParser = require('body-parser')

const BaseRouter = require('./baseRouter')
const SolutionRouter = require('./solutionRouter')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(BaseRouter)

app.use(SolutionRouter)

app.use('*', (req, res) => {
  res.status(404).json({message: 'route not found'})
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})