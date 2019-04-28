var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var categorySchema = require('./category');

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Product', schema);