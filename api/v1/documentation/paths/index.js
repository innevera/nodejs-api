const dotenv = require('dotenv')
const routes = require("../../routes");

dotenv.config()

const paths = Object.assign({},
    ...routes.map(({ name, path, secure }) => ({
        ['/api/' + process.env.API + path]: {
            get: {
                tags: [name],
                summary: `Get all ${name}`,
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
                        schema: {
                            "$ref": `#/schemas${path}`
                        }
                    }
                },
                security: secure.get ? [{ bearerAuth: [] }] : [],
            },
            post: {
                tags: [name],
                summary: `Add new ${name}`,
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                "$ref": `#/schemas${path}`
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        schema: {
                            "$ref": `#/schemas${path}`
                        }
                    }
                },
                security: secure.post ? [{ bearerAuth: [] }] : []
            },
        }
    })
    )
);

module.exports = paths;