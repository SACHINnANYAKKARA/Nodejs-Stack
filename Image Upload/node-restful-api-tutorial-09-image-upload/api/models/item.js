const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Item_name: { type: String, required: true },
    Item_price: { type: Number, required: true }
  
});

module.exports = mongoose.model('Item', itemSchema);