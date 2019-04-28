  //Required schema
  var Product = require('../models/product');

  //Connect to Mangoose 

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/shopping');

  //Products

  var products = [
            new Product ({
            imagePath: '/images/products/cam.jpg' , 
            title: 'Go Pro' ,
            sku:'100333',
            flybuys:'6',
            description: 'Super Photo!',
            category:'photo',
            price: 669
        }),
            new Product ({
            imagePath: '/images/products/camera.jpg' , 
            title: 'Canon EOS' ,
            sku:'100334',
            flybuys:'5',
            description: 'Impressive results',
            price: 598
        }),
            new Product ({
            imagePath: '/images/products/nespresso.jpg' , 
            title: 'Nespresso Essenza' ,
            sku:'100336',
            flybuys:'2',
            description: 'Mini Breville',
            price: 209
        }),
          new Product ({
          imagePath: '/images/products/videogame.jpg' , 
          title: 'PlayStation 4 Pro' ,
          sku:'100337',
          flybuys:'6',
          description: '1TB Black Console',
          price: 639
        }),
      new Product ({
      imagePath: '/images/products/radio.jpg' , 
      title: 'Sony ZSPS50' ,
      sku:'100338',
      flybuys:'1',
      description: 'Portable CD Radio',
      price: 111
    }),
    new Product ({
    imagePath: '/images/products/phone.jpg' , 
    title: 'Panasonic Cordless' ,
    sku:'100339',
    flybuys:'2',
    description: 'Intelligent Eco Mode',
    price: 215
    }),
    new Product ({
    imagePath: '/images/products/oven.jpg' , 
    title: 'Fisher & Paykel' ,
    sku:'100344',
    flybuys:'12',
    description: 'Wall Oven',
    price: 2699
}),
new Product ({
  imagePath: '/images/products/freezer.jpg' , 
  title: 'Fisher & Paykel' ,
  sku:'100343',
  flybuys:'11',
  description: 'Side Fridge Freezer',
  price: 2774
}),
new Product ({
  imagePath: '/images/products/nutri.jpg' , 
  title: 'Nutribullet' ,
  sku:'100353',
  flybuys:'2',
  description: '9 Piece Kit',
  price: 119
}),
new Product ({
  imagePath: '/images/products/airfryer.jpg' , 
  title: 'Phillips Airfryer' ,
  sku:'100363',
  flybuys:'3',
  description: 'XXL Digital',
  price: 489
}),
new Product ({
  imagePath: '/images/products/hairdryer.jpg' , 
  title: 'Remington ' ,
  sku:'100373',
  description: 'Turbo Hair Dryer',
  price: 49
}),
new Product ({
  imagePath: '/images/products/radiopan.jpg' , 
  title: 'Panasonic Premium' ,
  sku:'100383',
  description: 'Sound System',
  price: 98
}),

  ];

  //Store products in the database
  var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}