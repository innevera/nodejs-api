const UserModel = require('../../models/User');
const ModelConverter = require('../helpers/schemaConverter');

const schemas = {
    // User Schema
    User: {
        type: "object",
        properties: {
            ...ModelConverter(UserModel.schema.obj) // Convert Mongoose Schema to Swagger Schema
        }
    }
};
module.exports = schemas;