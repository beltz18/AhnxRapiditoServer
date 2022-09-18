import globals    from '../../../util/var.js'
import { Router } from 'express'

const router = Router()

router.get(globals.root, (req,res) => {
  res.send('Hello World!')
})

export default router