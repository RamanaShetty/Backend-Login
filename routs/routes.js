const {Router} = require('express')
const router = Router()
const controller = require('../controller/Data_control')

router.post('/regi',controller.regi_Data)

router.post('/login',controller.login_Data)

module.exports = router