var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const express = require("express");
const path = require("path");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

// DB related
require("./models/db.js");

var routes = require("./routes/routes.js")

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



// append /api for our http requests
app.use("/api", routes);


//Static file declaration
app.use(express.static(path.join(__dirname, "../client/build")));

//production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
//   //
//   app.get("*", (req, res) => {
//     res.sendfile(path.join((__dirname = "/client/build/index.html")));
//   });
// }

//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname , "../client/build/index.html"));
});

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
