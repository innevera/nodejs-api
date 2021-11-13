const Mongoose = require("mongoose");

const RoleSchema = new Mongoose.Schema(
  {
    id: Number,
    name: String,
    authority: {
      isAdmin: Boolean,
      //isWrite: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("roles", RoleSchema);
