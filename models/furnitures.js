const mongoose = require('mongoose');

const furnitures = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: String,
    glb: String,
    usdz: String,
    thumbnail: Array
},{ versionKey: null });

module.exports = mongoose.model('furnitures', furnitures);