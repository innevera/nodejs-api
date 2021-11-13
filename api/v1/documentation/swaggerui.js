const UserModel = require('../models/User');
const ModelConverter = require('./helpers/modelConverter');

const schema = {
    User: {
        "type": "object",
        ...ModelConverter(UserModel.schema.obj)
    }
};
module.exports = schema;