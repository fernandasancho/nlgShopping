// Import Mangoose
var mongoose = require('mongoose');

//Create Schema
var Schema = mongoose.Schema;

//Allows to hash the password
var bcrypt = require('bcrypt-nodejs');

//Define Module
var userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

//Method to get the password
userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
};

//Checks if the passwords matches
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);  
};

//Export module
module.exports = mongoose.model('User', userSchema);