const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAvtarImage: {
    type: Boolean,
    default:false,
  },
  avtarImage: {
    type: String,
    default:"",
  },
  session:{
    type: String,
    default: null
  }
},
{
  timestamps:true,
}
);
const User = mongoose.model('user', userSchema);
module.exports = User;