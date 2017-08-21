const express = require('express')
const cors = require('cors')
// const { parse } = require('url')
const next = require('next')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(cors())
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    server.get('*', (req, res) => (
      handle(req, res)
    ))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line
    })
  })
