const UserModel = require('../../models/User');
const BlogModel = require('../../models/Blog');
const converter = require('../helpers/schemaConverter');

/**
 * key = schema name
 * value = schemaConverter(Model)
 */
const schemas = {
    "users": converter(UserModel),
    "blogs": converter(BlogModel),
};
module.exports = schemas;