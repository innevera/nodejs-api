const UserModel = require('../models/User');

const schema = {
    swaggerschema: {
        User: {
            ...UserModel.schema.obj
        }
    } 
};

module.exports = schema;