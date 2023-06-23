const express = require('express')

const { getMessages } = require('../controllers/messages.controller')

const mesagesRouter = express.Router()

mesagesRouter.get('/', getMessages)

module.exports = mesagesRouter