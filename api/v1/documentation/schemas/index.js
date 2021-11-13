const UserModel = require('../../models/User');
const converter = require('../helpers/schemaConverter');

/**
 * key = schema name
 * value = schemaConverter(Model.schema.obj)
 */
const schemas = {
    // User Schema
    User: converter(UserModel.schema.obj)
};
module.exports = schemas;