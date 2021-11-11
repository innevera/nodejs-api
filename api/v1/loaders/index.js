const { connectMongo } = require('./mongodb');

module.exports = () => {
    connectMongo();
};