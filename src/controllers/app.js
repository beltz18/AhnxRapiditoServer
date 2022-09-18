import express from 'express'
import ejs     from 'ejs'
import routes  from '../router/v1/routes.js'
import path    from 'path'

const server = express()

function middlewares() {
  server.set('views', path.join('../../public/views'))
  server.engine('ejs', ejs.__express)
  server.set('view engine', 'ejs')
  server.use(express.static('public'))
  server.use(routes)
}

function app() {
  middlewares()
  return server
}

export default app