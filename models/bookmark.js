const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  link: { type: String, required: true }
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
