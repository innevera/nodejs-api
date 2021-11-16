const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    id: Number, // new => Document id'si çok uzun olduğu için diğer dokumanların boyutunu arttıracak
    name: String,
    surname: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    media: Number,
    role: Number,
    lastLoggedInAt: Date,
    status: {
        active: {
            approve: { type: Boolean, default: true },
            updatedAt: Date
        },
        deleted: {
            approve: { type: Boolean, default: false },
            updatedAt: Date
        }
    }
}, { timestamps: true, versionKey: false });

module.exports = Mongoose.model("users", UserSchema);