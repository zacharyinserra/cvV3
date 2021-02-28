//nodemon app.js --signal SIGKILL -e js,htm,css

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/cv.html");
});

app.get("/projects", function (req, res) {
  res.sendFile(__dirname + "/projects.html");
});

app.get("/download-resume", function (req, res) {
  var file = path.join(__dirname, "public/Resume.pdf");
  res.download(file, function (err) {
      if (err) {
          console.log("Error");
          console.log(err);
      } else {
          console.log("Success");
      }
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000...");
});