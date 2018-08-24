var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/:username', async function (req, res) {
  var username = req.params.username;
  var user = await User.find({'username': username})
  res.render('edit',{
    title: 'Express CRUD | ' + user[0].username,
    user: user
  });
});

module.exports = router;
