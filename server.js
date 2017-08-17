// Babel server functionality allows us to use JSX
// from React to populate the projects.html page
require('babel-register');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

/* 
** Load the middleware function to the root path and use 
** the built in static middleware function to serve
** the static page in the current directory 
*/
app.use('/', express.static('.'));

// Establish the rest of the needed middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Establish ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Handles form submits from FAQ.html 
app.post('/submitForm', function(req, res){
    var data = req.body;
    fs.appendFile('./test.txt', data.fn + ' ' + data.inputEmail + ' ' + data.subject + ' ' + data.message + '\n', function(error) {
       if (error) throw error;
    });
});

app.get('/submitForm', function(req,res){
   res.sendfile('FAQ.html'); 
});

app.listen(process.env.PORT || 3000);
         
// The following takes in the form data and stores it in a SQL database
/*var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'surettej_admin',
  password: 'NashuaSouth3',
  database: 'surettej_contactSubmits' 
});

connection.query('CREATE DATABASE IF NOT EXISTS contactSubmits', function (err) {
    if (err) throw err;
    connection.query('USE contactSubmits', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS people('
            + 'name VARCHAR(30),'
            + 'email VARCHAR(30),'
            + 'subject VARCHAR(30),'
            + 'message VARCHAR(500)'
            +  ')', function (err) {
                if (err) throw err;
            });
    });
});*/

    /*            //res.render("submitForm");        
    }
    var sqlQueryString = "INSERT INTO people(name,email,subject,message) values('"+req.body.fn+"','"+req.body.inputEmail+"','"+req.body.subject+"','"+req.body.message+"')";
    
    connection.query(sqlQueryString,function(error,results){
           if(error) throw error;
           else {*/
    //});
