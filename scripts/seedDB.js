const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below


console.log('SEEDING')
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://skillBuilder:qwerty123@ds143707.mlab.com:43707/heroku_2s9vp225",
  {
    useMongoClient: true
  }
);

const clientSeed = [
  {
    createdAt: Date.now(),
    name: "Johnny Appleseed",
    email: "johnnyappleseeds@gmail.com"
    password: "test"
  },

];

db.Client
  .remove({})
  .then(() => db.Book.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
