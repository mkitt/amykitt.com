const express = require('express')
const cors = require('cors')
const { parse } = require('url')
const next = require('next')
const bodyParser = require('body-parser')
const pathMatch = require('path-match')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
// const matchProjects = route('/projects/:id')

app.prepare()
.then(() => {
  const server = express()
  server.use(cors())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  // server.get('/projects/:id', (req, res) => {
  //   const { pathname, query } = parse(req.url, true)
  //   const params = matchProjects(pathname)
  //   return app.render(req, res, '/projects', Object.assign(params, query))
  // })

  server.get('*', (req, res) => (
    handle(req, res)
  ))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line
  })
})

