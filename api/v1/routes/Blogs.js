/** ExpressJS */
const express = require('express');
const router = express.Router();
/** Middlewares */
const authenticate = require("../middleware/authentication");
const validate = require('../middleware/validate');
/** Validations */
const { validation } = require('../validations/Blogs');
/** Controller */
const { index, create, update, remove } = require('../controllers/Blogs');

/** Get */
router.route('/').get(authenticate, index);

/** Post */
router.route('/').post(authenticate, validate(validation.create), create);
router.route('/').post(authenticate, validate(validation.remove), remove);
router.route('/:id').patch(authenticate, validate(validation.update), update)

/** Route path */
const path = '/blogs';

/** Swagger Documentation Options */
const swaggerOptions = {
    [`/api/v1${path}`]: {
        get: {
            tags: ['Blog'],
            summary: `Get single/all Blog(s)`,
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
            }
        },
        post: {
            tags: ['Blog'],
            summary: `Add new Blog`,
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
        put: {
            tags: ['Blog'],
            summary: `Update Blog`,
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
            tags: ['Blog'],
            summary: `Delete Blog`,
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
        }
    }
}

/** Exports */
module.exports = {
    router,
    path,
    swaggerOptions
};