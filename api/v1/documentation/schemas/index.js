const UserModel = require('../../models/User');
const BlogModel = require('../../models/Blog');
const BlogCategoryModel = require('../../models/BlogCategory');

const converter = require('../helpers/schemaConverter');

/**
 * key = schema name
 * value = schemaConverter(Model)
 */
const schemas = {
    "users": converter(UserModel),
    "blogs": converter(BlogModel),
    "blogcategories": converter(BlogCategoryModel),
};

/** Exports */
module.exports = schemas;