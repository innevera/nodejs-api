const swaggerOptions = {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "Express Api Documentation",
        description: "Rest Api get/post/put/delete playground",
    },
    servers: [
        {
            url: "/",
            description: "Main Url"
        }
    ],
    consumers: [
        "application/json"
    ],
    produces: [
        "application/json"
    ],
    path: {}
}
module.exports =  swaggerOptions;