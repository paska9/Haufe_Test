const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Pool = require('pg').Pool

var corsOptions = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
};

//create a client instance of the pg library
var pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "haufe_test",
  password: "Anaconda7",
  port: "5432"
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  console.log(request);
    let q = "Select \"user\" -> 'username' as username  from users limit 1";
    
    pool.query(q, (error, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json(results.rows[0].username);
      }
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});