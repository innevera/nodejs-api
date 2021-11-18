const winston = require("winston");

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'api/v1/logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'api/v1/logs/info.log', level: 'info' }),
      new winston.transports.File({ filename: 'api/v1/logs/combined.log' }),
    ],
  });

  module.exports = logger;