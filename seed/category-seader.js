//Required schema
var Product = require('../models/category');

//Connect to Mangoose 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

//Products

var category = [
    new Category ({
        category: Audio       
    
}),
new Category ({
  category: Computers & Tablets      

}),
new Category ({
  category: Phones & GPS     

}),

new Category ({
  category: Photos & Videos      

}),
new Category ({
  category: Household      

}),


];