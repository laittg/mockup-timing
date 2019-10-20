var express = require('express')
var router = express.Router()
var logger = require('../winston-logger')

/* GET users listing. */
router.post('/', function (req, res, next) {
  res.status(200).send({ rec: 1 })
  var body = req.body || {}
  var now = new Date()
  var msg = `${body.SplitId},${body.ChipNumber},${body.Tick},${now}\n`
  logger.timing(msg)
})

module.exports = router
