const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);


//////////////////////////////////////////////////////////////////////
// npm youtube-search API tool
var search = require('youtube-search');


var opts = {
  maxResults: 10,
  key: 'AIzaSyBE7pmW9Pc60kwAB4f7UK12QTI8svWwV7Q'
};
var searchTopic = "Bon Jovi, Living On A Prayer";

search(searchTopic, opts, function (err, results) {
  if (err) return console.log(err);

  var resultId = results[0].id;
  var resultLink = results[0].link;
  var resultTitle = results[0].title;
  var resultPic = results[0].thumbnails.default.url;
  console.dir(results[0].id);
  console.dir(results[0].link);
  console.dir(results[0].title);
  console.dir(results[0].thumbnails.default.url);



});
////////////////////////////////////////////////////////////////////////


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
