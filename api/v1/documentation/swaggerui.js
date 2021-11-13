const UserModel = require('../models/User');
const ModelConverter = require('./helpers/modelConverter');

const paths = {
    "/users" : {
        get: {
            tags: [
              "Users"
            ],
            summary: "Get all users",
            parameters: [
                {
                  name: "model",
                  in: "body",
                  description: "User detail",
                  required: true,
                  schema: {
                    "$ref": "#/definitions/User"
                  }
                }
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  "$ref": "#/definitions/User"
                }
              }
            }
        },
        "post": {
            tags: [
                "Users"
            ],
            summary: "Add new user",
            parameters: [
                {
                  name: "model",
                  in: "body",
                  description: "User detail",
                  required: true,
                  schema: {
                    "$ref": "#/definitions/User"
                  }
                }
            ],
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        "$ref": "#/definitions/User"
                    }
                }
            }
            
        },
    }
}

const schema = {
    User: {
        type: "object",
        properties: {
            ...ModelConverter(UserModel.schema.obj)
        }
        
    }
};
module.exports = {
    swaggerschema: schema,
    swaggerpaths: paths
};