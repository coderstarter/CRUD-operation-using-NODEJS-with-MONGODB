const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Creat a model
const ProductModel = mongoose.model('productss', productSchema);
module.exports = ProductModel; 