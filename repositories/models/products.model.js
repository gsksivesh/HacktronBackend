const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
    unique: true
  },
  Price: {
    type: Number,
    required: true,
  },
  ProductID: {
    type: Number,
    required: true
  },
  AddedDate: {
    type: Date
  },
  ModifiedDate: {
    type: Date
  },
});

module.exports = mongoose.model('Products', productsSchema, 'Products');
