/** Models */
const Blog = require('../models/Blog');

const insert = data => {
    const blog = new Blog(data);
    return blog.save();
}

const list = (query, paging) => {
    return Blog.find(query, [], paging);
}

const total = (query) => {
    return Blog.count(query);
}

const removeBlog = (query) => {
    return Blog.updateOne(query, { deleted: { approve: true } });
}

module.exports = {
    insert,
    list,
    total,
    removeBlog
}