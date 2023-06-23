const process = require('process')
const path = require('path')

function getMessages(req ,res) {
  // res.send('<ul><li>Hello George!</li></ul>')
  res.sendFile(path.join(process.cwd(), 'public', 'mountains.jpg'))
}

module.exports = {
  getMessages
}