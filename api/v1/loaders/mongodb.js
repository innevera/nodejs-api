const Mongoose = require('mongoose');

const mongodb = Mongoose.connection;

mongodb.once('open', () => {
    console.log('Mongodb connected..')
})

const connectMongo = async () => {
    await Mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => console.log(err))
}

module.exports = {
    connectMongo
}