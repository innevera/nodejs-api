const routes = require("../../routes");

const paths = Object.assign( {}, 
    ...Object.entries(routes).map(
        ([path]) => ({
            [path]: {
                get: {
                    tags: [path],
                    summary: `Get all ${path}`,
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
                    }
                },
                post: {
                    tags: [path],
                    summary: `Add new ${path}`,
                    parameters: [{
                        name: "Request",
                        in: "body",
                        description: "Parameters",
                        required: true,
                        schema: {
                            "$ref": `#/schemas${path}`
                        }
                    }],
                    responses: {
                        200: {
                            schema: {
                                "$ref": `#/schemas${path}`
                            }
                        }
                    }
        
                },
            }
        })
    )
);

module.exports = paths;