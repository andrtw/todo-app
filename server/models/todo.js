var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  task: {type: String, required: true},
  isCompleted: {type: Boolean, default: false}
});

module.exports = TodoSchema;