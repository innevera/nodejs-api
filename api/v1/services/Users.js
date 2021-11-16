const User = require('../models/User')

const insert = data => {
    const users = new User(data)
    return users.save()
}

const list = (query, paging) => {
    return User.find(query, [], paging)
}

const total_doc = (query) => {
    return User.count(query);
}

module.exports = {
    insert,
    list,
    total_doc
}