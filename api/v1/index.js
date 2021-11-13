const express = require('express')
const helmet = require('helmet')
const { server, swaggerOptions} = require('./config')
const loaders = require('./loaders')
const { Users } = require('./routes')
const swagger = require('swagger-ui-express')
const swaggerSchema = require('./documentation/swaggerui');

const swaggerOpt = Object.assign(swaggerOptions, swaggerSchema);

switch(swaggerSchema.swaggerschema.User.name){
    case String:
        console.log('string');
}
console.log(swaggerSchema.swaggerschema.User.name)
/** Apply default configuration */
server();
loaders();

/** Express settings  */
const app = express();
app.use(express.json());
app.use(helmet());

// connection
console.log(`Server up.. [${process.env.APP_PORT}]`)
app.use('/users', Users)
app.use('/', swagger.serve, swagger.setup(swaggerOpt))



module.exports = app;