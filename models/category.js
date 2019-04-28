var mongoose = require('mongoose');
var categorySchema = mongoose.Schema;

var CategorySchema = new Schema({
  name: { type: String, unique: true, lowercase: true}
});

module.exports = mongoose.model('Category', schema);



