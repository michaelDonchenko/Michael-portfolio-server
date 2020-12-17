const express = require('express')
const { read, create } = require('../controllers/message')

const router = express.Router()

router.post('/message', create)
router.get('/message', read)

module.exports = router
