var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET home page. */
router.get('/', async function (req, res) {
  var users = await User.find();
  res.render('index', {
    title: 'Express CRUD',
    welcome: 'simple CRUD on Express + MongoDB',
    add: 'Add User',
    list: 'User List',
    added: req.body.username,
    users: users
  });
});

router.post('/', function (req, res) {
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.save(function (err) {
    if (err) console.log(err);
    else (console.log('user ' + req.body.username + ' added'))
  });
  res.redirect('/');
});


module.exports = router;
