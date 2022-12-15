var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();
var http = require("http").createServer(app);

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "*"
}));

var connection = mysql.createConnection({
  host : "remotemysql.com",
  user : "wym4khPjwJ",
  password: "IpVePeo1GV",
  database: "wym4khPjwJ",
  port: 3306
});
// XAMMP
// host : "localhost",
// user : "root",
// password : "",
// database : "your db name"


connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MYSQL Database is connected successfully");
  }
});

//http://localhost:4000/list
app.get("/list", (request, response) => {
  var sqlQuery = `SELECT * FROM karthick_kumar`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
});

//http://localhost:4000/create
/*
{
  "name" : "",
  "age" : "",
  "location" : "",
  "email" : "",
  "blood_group" : ""
}
*/
app.post("/create", (request, response) => {
  var name = request.body.name;
  var age = request.body.age;
  var _location = request.body.location;
  var email = request.body.email;
  var blood_group = request.body.blood_group;

  var sqlQuery = `INSERT INTO karthick_kumar (name, age, location, email, blood_group) VALUES ('${name}', ${age}, '${_location}', '${email}', '${blood_group}')`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "User profile has been created successfully"
      });
    }
  })
});

//http://localhost:4000/edit/1
/*
{
  "name" : "",
  "age" : "",
  "location" : "",
  "email" : "",
  "blood_group" : ""
}
*/
app.put("/edit/:id", (request, response) => {
  var id = request.params.id;

  var name = request.body.name;
  var age = request.body.age;
  var _location = request.body.location;
  var email = request.body.email;
  var blood_group = request.body.blood_group;

  var sqlQuery = `UPDATE karthick_kumar SET name='${name}', age=${age}, location='${_location}', email='${email}', blood_group='${blood_group}' WHERE id=${id}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "User profile has been updated successfully"
      });
    }
  })

});

//http://localhost:4000/delete/1
app.delete("/delete/:id", (request, response) => {
  var id = request.params.id;

  var sqlQuery = `DELETE FROM karthick_kumar WHERE id=${id}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        message : "User profile has been deleted successfully"
      });
    }
  })
})


var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS server is running on port 4000");
})