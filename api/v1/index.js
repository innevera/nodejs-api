const express = require('express')
const helmet = require('helmet')
const config = require('./config')

/** Apply default configuration */
config();

/** Express settings  */
const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    console.log(`Server up.. [${process.env.APP_PORT}]`)
})