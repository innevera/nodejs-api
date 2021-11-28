const Mongoose = require('mongoose');

const BlogCategorySchema = new Mongoose.Schema({
    title: String,
    description: String,
    shortDescription: String,
    locale: Number,
    documents: Array,
    parent: Number,
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

module.exports = Mongoose.model('blogCategory', BlogCategorySchema);