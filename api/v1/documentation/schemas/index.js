const UserModel = require('../../models/User');
const converter = require('../helpers/schemaConverter');

/**
 * key = schema name
 * value = schemaConverter(Model)
 */
const schemas = {
    // User Schema
    "users": converter(UserModel)
};
module.exports = schemas;