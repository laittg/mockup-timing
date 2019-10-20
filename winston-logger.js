const fs = require('fs')

var logger = {}

logger.timing = function (msg) {
  fs.appendFile('timing.log', msg, err => {
    if (err) console.error(err)
  })
}

module.exports = logger
