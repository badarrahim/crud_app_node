const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'Name is Required'],
  },
  email: {
    type: String,
    unique: true,
  },
  gender: String,
  status: String,
});

// module.exports = mongoose.model('User', Schema);
const Userdb = mongoose.model('userdb', Schema);
module.exports = Userdb;
