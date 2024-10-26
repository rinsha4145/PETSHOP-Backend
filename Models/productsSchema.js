const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    productName: { type: String, required: true },
    category: { type: String, required: true },
    src: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, 
    actualPrice: { type: Number, min: 0 },
    productDescription: { type: String, required: true },
});


module.exports = mongoose.model('Product', productSchema);
