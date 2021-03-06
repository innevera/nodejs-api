/** ExpressJS */
const express = require('express');
const router = express.Router();
/** Middlewares */
const authenticate = require("../middleware/authentication");
const validate = require('../middleware/validate');
/** Validations */
const { validation } = require('../validations/BlogCategories');
/** Controller */
const { index, create, remove } = require('../controllers/Blogs');

/** Get */
router.route('/').get(authenticate, index);

/** Post */
router.route('/').post(authenticate, validate(validation.create), create);
router.route('/').post(authenticate, validate(validation.remove), remove);

/** Route path */
const path = '/blogcategories';

/** Swagger Documentation Options */
const swaggerOptions = {
    [`/api/v1${path}`]: {
        get: {
            tags: ['Blog Categories'],
            summary: `Get single/all Blog Categor(y)ies`,
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
            tags: ['Blog Categories'],
            summary: `Add new Blog Category`,
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
            tags: ['Blog Categories'],
            summary: `Update Blog Category`,
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
            tags: ['Blog Categories'],
            summary: `Delete Blog Category`,
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