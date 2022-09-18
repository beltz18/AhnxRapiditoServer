import globals from '../util/var.js'
import app     from './controllers/app.js'

function __init__ () {
  app().listen(globals.port, () => {
    console.log(`Server running on ${globals.url+globals.port}`)
  })
}

__init__()