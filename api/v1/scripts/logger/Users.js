const winston = require("winston");
require('winston-daily-rotate-file');


var transport = new winston.transports.DailyRotateFile({
  dirname: 'api/v1/logs/',
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d'
});

/*transport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
});*/

var logger = winston.createLogger({
  defaultMeta: { ip: '127.000.000' , date: new Date() },
  transports: [
    transport
  ]
});

  module.exports = logger; 