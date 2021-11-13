const express = require('express')
const router = express.Router();
/** Middlewares */
const validate = require('../middleware/validate')
/** Validations */
const schema = require('../validations/Users')
/** Controller */
const { index, create } = require('../controllers/Users')

/** GET */
router.get('/', index)

/** POST */
router.route('/').post(validate(schema.createValidation), create)

const userPaths = {
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

/** EXPORT */
module.exports = {
    router,
    userPaths
};