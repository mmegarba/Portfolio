const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors")
app.use(cors())
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// var apiRoutes = require("./controllers/clientController.js");
// var validatorRoutes = require("./controllers/validatorRoutes.js")
// app.use("auth",validatorRoutes)
// app.use("/api", apiRoutes);
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://skillBuilder:qwerty123@ds143707.mlab.com:43707/heroku_2s9vp225",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
