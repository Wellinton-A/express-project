const friends = require('../models/friends.model')

function getAllFriends(req, res) {
  res.json(friends)
}

function getFriendById(req, res) {
  const friendId = req.params.friendId
  const friend = friends[friendId]
  if (friend) {
    res.json(friend)
  } else {
    res.status(404).json({
      error: "existe nada!"
  })
}
}

function postNewFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
    error: 'no name\'s friend passed, please try again!'
    })
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name
  }
  friends.push(newFriend)
  res.status(200).json(newFriend)
}

module.exports = {
  getAllFriends,
  getFriendById,
  postNewFriend
}