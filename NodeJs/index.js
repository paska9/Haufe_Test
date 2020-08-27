const express = require("express");
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

// create a new Express app server object
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set the port for the Node application
const port = process.env.port || 3456;

// set the file path for the HTML file
const htmlPath = path.join(__dirname + "/index.html");

// create a client instance of the pg library
var client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "haufe_test",
  password: "Anaconda7",
  port: "5432"
});

// 'GET' route for the web app
app.get("/", (req, resp) => {
  console.log(`req: ${req}`);
  console.log(`resp: ${resp}`);

  // send the HTML file back to the front end
  resp.sendFile(htmlPath);
});

// 'POST' route for the web app
app.post("/query", function(req, resp) {
  // parse the user's query
  let userQuery = req.body.query;
  console.log(`\nuserQuery: ${typeof userQuery}`);
  console.log(`${userQuery}`);

  // load the HTML file into the Node app's memory
  let htmlData = fs.readFileSync("./index.html", "utf8");

  // Concatenate an HTML string for the Postgres data
  let html = `var tableData = "QUERY: ${userQuery}";`;

  client.query("Select \"user\" -> 'username' as username  from users limit 1", (err, res) => {
    console.log(err, res);
    resp.send(htmlData + `` + res.rows[0].username);
    client.end();
  });

  // send the HTML file and query response to the front end
  
});

var server = app.listen(port, function() {
  console.log(
    `\nPostgres Node server is running on port: ${server.address().port}`
  );
});