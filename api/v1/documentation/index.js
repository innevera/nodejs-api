const paths = require('./paths');
const schemas = require('./schemas');

const swaggerOptions = {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "Node-Server Api Documentation",
        description: "Rest Api get/post/put/delete playground",
    },
    servers: [
        {
            url: "/",
            description: "V1"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    },
    consumers: [
        "application/json"
    ],
    produces: [
        "application/json"
    ],
    paths,
    schemas
}

module.exports = swaggerOptions;