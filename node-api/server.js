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

})



var port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS server is running on port 4000");
})