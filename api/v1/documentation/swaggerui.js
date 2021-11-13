const UserModel = require('../models/User');
const ModelConverter = require('./helpers/modelConverter');

const schema = {
    User: {
        type: "object",
        properties: {
            ...ModelConverter(UserModel.schema.obj)
        }
        
    }
};
module.exports = schema;