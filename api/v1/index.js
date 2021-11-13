const express = require('express')
const helmet = require('helmet')
const { server, swaggerOptions} = require('./config')
const loaders = require('./loaders')
const { Users } = require('./routes')
const swagger = require('swagger-ui-express')
const { swaggerschema, swaggerpaths} = require('./documentation/swaggerui');

/** Apply default configuration */
server();
loaders();

/** Express settings  */
const app = express();
app.use(express.json());
app.use(helmet());

/** connection */ 
console.log(`Server up.. [${process.env.APP_PORT}]`)
app.use('/users', Users)

/** Swagger */
swaggerOptions.paths = swaggerpaths;
swaggerOptions.definitions = swaggerschema;
console.log(swaggerOptions.definitions.User.properties.status)
app.use('/', swagger.serve, swagger.setup(swaggerOptions))



module.exports = app;