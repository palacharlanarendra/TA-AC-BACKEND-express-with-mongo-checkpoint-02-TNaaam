var express = require('express');
var router = express.Router();
var Event = require('../models/events');
var Remark = require('../models/remarks');
/* GET home page. */
router.get('/:username', function (req, res, next) {
  var name = req.params.username;
  Event.find({ event_category: name }).exec((err, events) => {
    res.render('category', { events: events });
  });
});
module.exports = router;
