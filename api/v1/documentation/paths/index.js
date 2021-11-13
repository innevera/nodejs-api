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

module.exports = paths;