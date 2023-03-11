const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname : { type: String, required: true },
    email    : { type: String, required: true, unique: true },
    address  : { type: String, required: true },
    birthDate: { type: Date, required: true },
    password : { type: String, required: true },
    imageUrl : { type: String },
});
       
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);