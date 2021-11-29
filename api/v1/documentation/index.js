/** Environment */
const dotenv = require('dotenv');
/**  */
const paths = require('./paths');
const tags = require('./tags');
const schemas = require('./schemas');

const { activeRef, deletedRef } = require('./helpers/schemaRefs');

dotenv.config();
const { BASE_URL, APP_PORT, API } = process.env;

const swaggerDocument = {
    openapi: "3.0.1",
    // swagger: "2.0",
    info: {
        title: "Node-Server Api Documentation",
        version: "1.0.0",
        description: "NodeJS [Express] restApi playground. ",
        termsOfService: 'termsOfService',
        contact: {
            email: "apiteam@innevera.com"
        },
        license: {
            name: "Github Repository",
            url: "https://github.com/innevera/node-server"
        }
    },
    host: `${BASE_URL}:${APP_PORT}/api/`,
    basePath: API,
    tags: tags,
    servers: [
        {
            // url: `/api/${API}`,
            description: "V1"
        }
    ],
    externalDocs: {
        description: "Find out more about Swagger Documentation",
        url: "https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/"
    },
    components: {
        schemas: {
            active: activeRef,
            deleted: deletedRef
        },
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

const swOptions = {
    // customCss: "",
    customCssUrl: './style.css'
}

module.exports = {
    swaggerDocument,
    swOptions
};