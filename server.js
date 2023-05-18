const port = process.env.PORT || 3000
const pjson = require('./package')
const hostname = 'localhost'

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (error) => {
    if (error) throw error
    console.log(
      `${pjson.name}-${pjson.version} > Ready on http://localhost:${port}`
    )
  })
})
