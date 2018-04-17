const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const bookmarkSeed = [
  {
    title: "Living On A Prayer",
    artist: "Bon Jovi",
    link: "https://www.youtube.com/watch?v=lDK9QqIzhwk"
  },
  {
    title: "Gypsy Road",
    artist: "Cinderella",
    link: "https://www.youtube.com/watch?v=6j7E7pvLxmI"
  }
];

db.Bookmark
  .remove({})
  .then(() => db.Bookmark.collection.insertMany(bookmarkSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
