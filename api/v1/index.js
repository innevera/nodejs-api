const express = require('express')
const helmet = require('helmet')
const { server } = require('./config')
const loaders = require('./loaders')
const Routes = require('./routes')
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
console.log("Server up... \x1b[36m%s\x1b[0m", `http://localhost:${process.env.APP_PORT}/`)
    //console.log("Go to Documentation: \x1b[36m%s\x1b[0m", `http://localhost:${process.env.APP_PORT}/`)

/** Routes */
Object.keys(Routes).map((key) => {
    app.use(key, Routes[key])
})

/** Swagger */
app.use('/', swagger.serve, swagger.setup(swaggerOptions))

module.exports = app;