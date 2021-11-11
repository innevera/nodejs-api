const User = require('../models/User')

const insert = data => {
    const users = new User(data)
    return users.save()
}

const list = () => {
    return User.find({})
}

module.exports = {
    insert,
    list
}