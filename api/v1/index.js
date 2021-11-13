const express = require('express')
const helmet = require('helmet')
const { server } = require('./config')
const loaders = require('./loaders')
const { Users } = require('./routes')
const swagger = require('swagger-ui-express')
const swaggerOptions = require('./documentation/');

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
app.use('/', swagger.serve, swagger.setup(swaggerOptions))

module.exports = app;