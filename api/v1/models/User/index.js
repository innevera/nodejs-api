const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    media: String,
    platform: { type: Number, default: 0 },
    role: { type: Number, default: 0 },
    lastLoggedInAt: { type: Date, default: null },
    active: {
        approve: { type: Boolean, default: true },
        updatedAt: { type: Date, default: new Date() }
    },
    deleted: {
        approve: { type: Boolean, default: false },
        updatedAt: { type: Date, default: new Date() }
    },
    accessToken: String,
    refreshToke: String
}, { timestamps: true, versionKey: false });

module.exports = Mongoose.model("user", UserSchema);