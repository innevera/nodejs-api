const paths = {
    "/users": {
        get: {
            tags: [
                "Users"
            ],
            summary: "Get all users",
            parameters: [{
                    name: "model",
                    in: "body",
                    description: "User detail",
                    required: true,
                    schema: {
                        "$ref": "#/schemas/User"
                    }
                },
                {
                    name: "id",
                    in: "query",
                    schema: {
                        type: "integer",
                        minimum: 0,
                        default: 0
                    }
                }
            ],
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        "$ref": "#/schemas/User"
                    }
                }
            }
        },
        "post": {
            tags: [
                "Users"
            ],
            summary: "Add new user",
            parameters: [{
                name: "model",
                in: "body",
                description: "User detail",
                required: true,
                schema: {
                    "$ref": "#/schemas/User"
                }
            }],
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        "$ref": "#/schemas/User"
                    }
                }
            }

        },
    }
}

module.exports = paths;