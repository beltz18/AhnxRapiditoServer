import dotenv from 'dotenv'
dotenv.config()

// Server
const port = process.env.PORT
const uri  = process.env.URI_DB
const url  = process.env.SERVER_DEV_PATH
// Versions
const v1   = process.env.V1
const curv = process.env.CURRENT_V
// Paths
const root = process.env.ROOT_PATH

export default {
  port,
  uri,
  url,
  v1,
  curv,
  root
}