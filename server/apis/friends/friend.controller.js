var Friend = require('./friend.model');

// /api/friends (GET)
exports.getFriends = function (req, res, next) {

    Friend.find({}, function (err, friends) {

        if (err) res.status(500).send(err);
        else res.json(friends);
    });
};


// /api/friends (POST)
exports.postFriend = function (req, res, next) {

    var friend = new Friend(req.body);
    friend.save(function (err) {

        if (err) res.send(err);
        else res.json(friend);
    });
};