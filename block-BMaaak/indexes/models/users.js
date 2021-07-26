let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    username: {type: String, unqiue: true},
    email: {type: String, unqiue: true},
    address: {
        city: String,
        state: String,
        country: String,
        pin: Number
    }
}, {timestamps: true});


userSchema.index({'address.country': 1, 'address.state': unique});

module.exports = mongoose.model("User", userSchema);