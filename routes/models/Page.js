// models/Page.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Page', pageSchema);
