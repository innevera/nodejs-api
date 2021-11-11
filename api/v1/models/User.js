const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
    image: String,
    role: Number,
    active: Boolean,
    deleted: Boolean
}, { timestamps: true, versionKey: false });

module.exports = Mongoose.model('users', UserSchema);