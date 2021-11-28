const routes = require("../../routes");

const tags = routes.map(({ swaggerTag }) => ({ ...swaggerTag }));

module.exports = tags;