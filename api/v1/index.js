const express = require('express');
const helmet = require('helmet');
/** Configurations */
const { server } = require('./config');
/** Loaders */
const loaders = require('./loaders');
/** Routes */
const Routes = require('./routes');
/** Locale */
const { i18next, i18nextMiddleware } = require('./config/i18next');
/** Swagger Documentation */
const swagger = require('swagger-ui-express');
const swaggerOptions = require('./documentation/');


/** Apply default configuration */
server();
loaders();

/** Environment */
const { API, APP_PORT } = process.env;

/** Express settings  */
const app = express();

/* Warning */
app.use((req, res, next) => {
    const allowedOrigins = ['http://127.0.0.1:3001', 'http://localhost:3001', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

app.use(express.json());
app.use(helmet());

/** i18next Localization */
app.use(i18nextMiddleware.handle(i18next));

/** connection */
console.log("Server up... \x1b[36m%s\x1b[0m", `http://localhost:${APP_PORT}/`)
console.log("Go to Documentation: \x1b[36m%s\x1b[0m", `http://localhost:${APP_PORT}/api/${API}/`)

/** Routes */
Routes.map(({ direction, path }) => app.use(`/api/${API}${path}`, direction))

/** Swagger */
app.use(`/api/${API}/`, swagger.serve, swagger.setup(swaggerOptions))

/** Exports */
module.exports = app;