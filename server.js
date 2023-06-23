const express = require('express')

const { getHome } = require('./controllers/home.controller')

const friendsRouter = require('./routes/friends.routes')
const mesagesRouter = require('./routes/messages.routes')

const app = express()
const PORT = 3000

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  console.log(`${req.method}, ${req.url}, ${delta}ms`)
})

app.use(express.json())


app.get('/', getHome)

app.use('/friends', friendsRouter)
app.use('/messages', mesagesRouter)


app.listen(PORT, () => (
  console.log(`app listening on port ${PORT}`)
))