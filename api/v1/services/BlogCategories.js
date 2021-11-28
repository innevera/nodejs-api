/** Models */
const BlogCategory = require('../models/BlogCategory');

const insert = data => {
    const blog = new BlogCategory(data);
    return blog.save();
}

const list = (query, paging) => {
    return BlogCategory.find(query, [], paging);
}

const total = (query) => {
    return BlogCategory.count(query);
}

const removeBlogCategory = (query) => {
    return BlogCategory.updateOne(query, { deleted: { approve: true } });
}

module.exports = {
    insert,
    list,
    total,
    removeBlogCategory
}