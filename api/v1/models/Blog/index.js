const Mongoose = require('mongoose');

const BlogSchema = new Mongoose.Schema({
    title: String,
    description: String,
    shortDescription: String,
    locale: Number,
    documents: Array,
    categories: Array,
    // defaultCategory : ?,
    order: Number,
    tags: Array,
    route: String,
    metaTitle: String,
    metaDescription: String,
    active: {
        approve: { type: Boolean, default: true },
        updatedAt: { type: Date, default: new Date() }
    },
    deleted: {
        approve: { type: Boolean, default: false },
        updatedAt: { type: Date, default: new Date() }
    }
}, { timestamps: true, versionKey: false });

module.exports = Mongoose.model('blog', BlogSchema);