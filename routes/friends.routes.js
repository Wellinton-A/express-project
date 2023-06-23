const express = require('express')

const { getAllFriends, getFriendById, postNewFriend } = require('../controllers/friends.controller')

const friendsRouter = express.Router()

friendsRouter.post('/', postNewFriend)
friendsRouter.get('/', getAllFriends)
friendsRouter.get('/:friendId', getFriendById)

module.exports = friendsRouter