var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('App en desarrollo');
});

router.post('/',(req, res, next) => {
  console.log(req.body);
  res.send('recibido')
})

module.exports = router;
