const fs = require('fs')

var logger = {}

logger.timing = function (msg) {
  if (!msg) {
    fs.truncate('timing.log', 0, () => {})
  } else {
    fs.appendFile('timing.log', msg, err => {
      if (err) console.error(err)
    })
  }
}

module.exports = logger
