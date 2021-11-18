const winston = require("winston");


// Logging levels in winston conform to the severity ordering specified by from most important to least important._
const levels = { 
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};


const logger = winston.createLogger({
    levels: levels,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service', ip: "127.000.000", date: new Date() },
    transports: [
      new winston.transports.File({ filename: 'api/v1/logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'api/v1/logs/info.log', level: 'info' }),
      new winston.transports.File({ filename: 'api/v1/logs/combined.log' }),
    ],
  });

  module.exports = logger;