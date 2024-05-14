const router = require("express").Router()
const authMiddleware = require('../middleware/auth.middleware')
const roleCheckMiddleware = require('../middleware/roleCheck.middleware')

// End Point untuk cek Auth
router.use('/admin', authMiddleware, roleCheckMiddleware('admin'), require('./admin'))
router.use('/customer', authMiddleware, require('./customers'))
router.use('/auth', require('./auth.router'))
router.use('/testimony', require('../routers/customers/testimony.router'))

module.exports = router
