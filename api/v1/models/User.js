const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
  {
    id: Number, // new => Document id'si çok uzun olduğu için diğer dokumanların boyutunu arttıracak
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
    image: String, // dosyaların listelendiği bir doküman olursa id olacak.
    role: Number,
    locale: Number, // new => kullanıcı ülkesi/dili kodu
    active: Boolean, // active ve delete status olarak tek bir alana dönüştürüp, statusType için ayrı bir doküman olabilir.
    deleted: Boolean, //
    // status: { statusType: Number, updatedAt: Date},
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("users", UserSchema);
