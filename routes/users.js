var express = require('express');
var router = express.Router();
const app = express();


router.get('/app', function(req, res, next) {
  res.send("hello");
});

router.get('/app_1', function(req, res, next) {
  res.send("hello babys");
});

router.get('/api_1',function(req,res){
 
  res.send({name:'POST'});
});

module.exports = router;

router.get('/api', function(req, res, next) {

  connection.query('SELECT * FROM users',function(err,rows){
         if(err) throw err;
         console.log(rows);
         res.render('index', { users:rows });

  });
//  res.render('index', { title: 'Welcome to cruda app' });
});

//Disaster View
/*router.get('/api', function(req, res, next) {

  connection.query('SELECT * FROM users',function(err,rows){
         if(err) throw err;
         console.log(rows);
         res.render('index', { users:rows });

  });
//  res.render('index', { title: 'Welcome to cruda app' });
});*/
