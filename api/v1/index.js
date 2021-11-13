const express = require('express')
const helmet = require('helmet')
const { server, swaggerOptions} = require('./config')
const loaders = require('./loaders')
const { Users } = require('./routes')
const swagger = require('swagger-ui-express')
const swaggerSchema = require('./documentation/swaggerui');

swaggerOptions.paths = Users.userPaths;
swaggerOptions.definitions = swaggerSchema;


console.log(swaggerOptions)
/** Apply default configuration */
server();
loaders();

/** Express settings  */
const app = express();
app.use(express.json());
app.use(helmet());

// connection
console.log(`Server up.. [${process.env.APP_PORT}]`)
app.use('/users', Users.router)
app.use('/', swagger.serve, swagger.setup(swaggerOptions))



module.exports = app;