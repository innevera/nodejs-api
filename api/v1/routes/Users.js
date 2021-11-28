/** ExpressJS */
const express = require('express');
const router = express.Router();
/** Middlewares */
const authenticate = require("../middleware/authentication");
const validate = require('../middleware/validate');
/** Validations */
const { validation } = require('../validations/Users');
/** Controller */
const { index, create, login } = require('../controllers/Users');


/** Get */
router.route('/').get(authenticate, index);

/** Post */
router.route('/').post(authenticate, validate(validation.create), create);

/** Login */
router.route("/login").post(validate(validation.login), login);

/** Route path */
const path = '/users';

/** Swagger Documentation Options */
const swaggerOptions = {
    [`/api/v1${path}`]: {
        get: {
            tags: ['User'],
            summary: `Get all Users`,
            parameters: [{
                name: "Request",
                in: "query",
                description: "Parameters",
                required: true,
                schema: {
                    "$ref": `#/schemas${path}`
                }
            },
            ],
            responses: {
                200: {
                    schema: { "$ref": `#/schemas${path}` }
                }
            },
            security: [{ bearerAuth: [] }]
        },
        post: {
            tags: ['User'],
            summary: `Add new User`,
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { "$ref": `#/schemas${path}` }
                    }
                }
            },
            responses: {
                201: {
                    schema: { "$ref": `#/schemas${path}` }
                }
            },
            security: [{ bearerAuth: [] }]
        },
        /*put: {
            tags: ['User'],
            summary: `Update User`,
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { "$ref": `#/schemas${path}` }
                    }
                }
            },
            responses: {
                201: {
                    schema: { "$ref": `#/schemas${path}` }
                }
            },
            security: [{ bearerAuth: [] }]
        },
        delete: {
            tags: ['User'],
            summary: `Delete User`,
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { type: "object", properties: { _id: { type: "number" } } }
                    }
                }
            },
            responses: {
                201: {
                    schema: { "$ref": `#/schemas${path}` }
                }
            },
            security: [{ bearerAuth: [] }]
        } */
    }
}

/** Exports */
module.exports = {
    router,
    swaggerOptions
};