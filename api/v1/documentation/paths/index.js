const routes = require("../../routes");

const paths = Object.assign({},
    ...routes.map(({ swaggerOptions }) => ({ ...swaggerOptions })
    )
);

module.exports = paths;