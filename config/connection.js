var mysql = require('mysql');
var db;

var settings = {
    host     : "localhost",
    user     : "root",
    password : '',
    database : "crudapp"
};

function  connectDatbase() {
      if(!db){
          db=mysql.createConnection(settings);
          db.connect(function (err) {

              if(!err){
                  console.log("Database Connected");
              }else{
                 console.log("Error database connection")
              }

          })
      }
      return db;
}


module.exports = connectDatbase();



