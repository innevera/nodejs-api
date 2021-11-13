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
    '/users' : {
        get: {
            tags: [
              "Users"
            ],
            summary: "Get all users in system",
            responses: {
              200: {
                description: "OK",
                schema: {
                  "$ref": "#/definitions/User"
                }
              }
            }
        },
        'post': {
            summary: "Add New User",
            tags: [
                "Users"
            ],
            parameters: {
                name: "body",
                description: "Created user object",
                required: true,
                schema: {
                    "$ref": "#/schema/User"
                }
            },
            responses: {
                '201': {
                    description: "Created"
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