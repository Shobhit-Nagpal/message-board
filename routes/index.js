var express = require('express');
var router = express.Router();

const messages = [{text: "Hi there!", user: "Amando", added: new Date()},
                  {text: "Hello world", user: "Charles", added: new Date()},
                  {text: "Express is kinda cool", user: "Shobhit", added: new Date()},
                 ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('form');
});

router.post('/new', function(req, res, next) {
    console.log(req.body);
    const author = req.body.author_name;
    const message = req.body.message;

    messages.push({text: message, user: author, added: new Date()});
    res.redirect('/');
});

module.exports = router;
