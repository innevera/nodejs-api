const UserModel = require('../../models/User');
const schemaConverter = require('../helpers/schemaConverter');

/**
 * key = schema name
 * value = schemaConverter(Model.schema.obj)
 */
const schemas = {
    // User Schema
    User: schemaConverter(UserModel.schema.obj)
};
module.exports = schemas;