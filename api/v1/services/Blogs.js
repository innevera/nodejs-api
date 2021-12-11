/** Models */
const Blog = require('../models/Blog');

const list = (query, paging) => {
    return Blog.find(query, [], paging);
}

const insert = data => {
    const blog = new Blog(data);
    return blog.save();
}

const modify = (data, id) => {
    return Blog.findByIdAndUpdate(id, data, { new: true })
}

const removeBlog = (query) => {
    return Blog.updateOne(query, { deleted: { approve: true } });
}

const total = (query) => {
    return Blog.count(query);
}

module.exports = {
    list,
    insert,
    removeBlog,
    modify,
    total
}