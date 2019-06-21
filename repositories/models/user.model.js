const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  AddedDate: {
    type: Date,
    default: Date.now
  },
  Hash:{
    type: String,
    required: true
  },
  FirstName:{
    type:String
  },
  LastName:{
    type:String
  }
});

module.exports = mongoose.model('Users', userSchema, 'Users');
