const UserModel = require('../../models/User');
const ModelConverter = require('../helpers/modelConverter');

const schemas = {
    User: {
        type: "object",
        properties: {
            ...ModelConverter(UserModel.schema.obj)
        }
        
    }
};
module.exports = schemas;