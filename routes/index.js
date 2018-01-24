
var express = require('express');
var router = express.Router();
var connection = require('../config/connection');
const app = express();
/* GET home page. */


router.get('/api',function(req,res){
    res.render('d');
});

app.post('/api_post',function(req,res){
    res.send({name:'POST'});
});


router.get('/', function(req, res, next) {

  connection.query('SELECT * FROM users',function(err,rows){
         if(err) throw err;
         console.log(rows);
         res.render('index', { users:rows });

  });
//  res.render('index', { title: 'Welcome to cruda app' });
});

router.post('/addUser',function (req,res) {
     const userData = {
         fname:req.body.fname,
         lname:req.body.lname,
         email:req.body.email,
         prof:req.body.prof
     }

 /**
     console.log(userData);
     res.send("Data insert");
  */


 connection.query("INSERT INTO users SET ?",userData,function (err,result) {
       if(err) throw err
       res.redirect('/');
  });
});

router.get('/deleteUser/:id',function (req,res) {
    var Userid = req.params.id;

   /** console.log(userid);
    res.send("Id Reciver") */

      connection.query("DELETE FROM users WHERE id=?",[Userid],function(err,rows){
           if(err) throw err;
           res.redirect('/');
      });
});

router.get('/api',function(req,res){
    res.render('d');
});



router.get('/edit/:id',function (req,res) {
    var Userid = req.params.id;



    connection.query("SELECT * FROM users WHERE id=?",[Userid],function(err,rows){
        if(err) throw err;
        res.render('d');
    });
});


router.post('/updateUser/:id',function (req,res) {
        var fname = req.body.fname;
        var lname = req.body.lname;
        var email = req.body.email;
        var prof = req.body.prof;

        var updateId = req.params.id;

        connection.query("UPDATE users SET fname=?,lname=?,email=?,prof=? WHERE id=?",[fname,lname,email,prof,updateId],function (err,respond) {
              if(err) throw err;
              res.redirect('../../');
        });

});


//Disaster Management Add
router.post('/addDisaster',function (req,res) {
    const userData = {

        Disaster_title:req.body.Disaster_title,
        Name:req.body.Name,
        Date:req.body.Date,
        Location:req.body.Location,
        Latitude:req.body.Latitude,
        Longitude:req.body.Longitude,
        Damage:req.body.Damage,
        Injuries:req.body.Injuries,
        Deaths:req.body.Deaths,
        Details:req.body.Details,
        Special:req.body.Special,
        Warning:req.body.Warning
    }




connection.query("INSERT INTO disaster SET ?",userData,function (err,result) {
      if(err) throw err
      res.redirect('d');
 });
});

//Disaster Managment Delete 
router.get('/deleteDisaster/:id',function (req,res) {
    var Userid = req.params.id;

   

      connection.query("DELETE FROM disaster WHERE id=?",[Userid],function(err,rows){
           if(err) throw err;
           res.redirect('/');
      });
});

router.get('/api',function(req,res){
    res.render('d');
});


//Disaster Managment Update
router.get('/editDisaster/:id',function (req,res) {
    var Userid = req.params.id;



    connection.query("SELECT * FROM disaster WHERE id=?",[Userid],function(err,rows){
        if(err) throw err;
        res.render('d');
    });
});


router.post('/updateDisaster/:id',function (req,res) {
     

        var Disaster_title = req.body.Disaster_title;
        var Name = req.body.Name;
        var Date = req.body.Date;
        var Location = req.body.Location;
        var Latitude = req.body.Latitude;
        var Longitude = req.body.Longitude;
        var Damage = req.body.Damage;
        var Injuries = req.body.Injuries;
        var Deaths = req.body.Deaths;
        var Details = req.body.Details;
        var Special = req.body.Special;
        var Warning = req.body.Warning;
    
        var updateId = req.params.id;

        connection.query("UPDATE person SET Disaster_title=?,Name=?,Date=?,Location=?,Latitude=?,Longitude=?,Damage=?,Injuries=?,Deaths=?,Details=?,Special=?,Warning=? WHERE id=?",[Disaster_title,Name,Date,Location,Latitude,Longitude,Damage,Injuries,Deaths,Details,Special,Warning,updateId],function (err,respond) {
              if(err) throw err;
              res.redirect('../../');
        });

});

//Add person
router.post('/addPerson',function (req,res) {
    const userData = {

        first_name:req.body.first_name,
        dob:req.body.dob,
        job_title:req.body.job_title,
        user_level:req.body.user_level,
        contact_number:req.body.contact_number,
        address:req.body.address,
        username:req.body.username,
        password:req.body.password,
        last_name:req.body.last_name,
        email:req.body.email
          
    }




connection.query("INSERT INTO person SET ?",userData,function (err,result) {
      if(err) throw err
      res.redirect('/');
 });
});

//Delete Person

router.get('/deletePerson/:id',function (req,res) {
    var Userid = req.params.id;

   

      connection.query("DELETE FROM person WHERE id=?",[Userid],function(err,rows){
           if(err) throw err;
           res.redirect('/');
      });
});

//Update Person
router.get('/editPerson/:id',function (req,res) {
    var Userid = req.params.id;



    connection.query("SELECT * FROM person WHERE id=?",[Userid],function(err,rows){
        if(err) throw err;
        res.render('d');
    });
});


router.post('/updatePerson/:id',function (req,res) {
     
        var first_name = req.body.first_name;
        var dob = req.body.dob;
        var job_title = req.body.job_title;
        var user_level = req.body.user_level;
        var contact_number = req.body.contact_number;
        var address = req.body.address;
        var username = req.body.username;
        var password = req.body.password;
        var last_name = req.body.last_name;
        var email = req.body.email; 

        var updateId = req.params.id;

        connection.query("UPDATE person SET first_name=?,dob=?,job_title=?,user_level=?,contact_number=?,address=?,username=?,password=?,last_name=?,email=?  WHERE id=?",[first_name,dob,job_title,user_level,contact_number,address,username,password,last_name,email,updateId],function (err,respond) {
              if(err) throw err;
              res.redirect('../../');
        });

});


module.exports = router;
