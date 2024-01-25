const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Open")
    }).catch(err => {
        console.log("Oh No Error")
        console.log(err)
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    onSale: {
        type: Boolean,
    }   
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ 
    name: 'Mountain Bike',
    price: 599,
    onSale: true
}).save().then(data => {
    console.log("It Worked")
    console.log(data)
}).catch(err => {
    console.log("Oh No Error")
    console.log(err)
});
