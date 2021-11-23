const User = require('../models/User');

const insert = data => {
    const users = new User(data);
    return users.save();
}

const list = (query, paging) => {
    return User.find(query, [], paging);
}

const userLogin = data => {
    return User.findOne(data)
}

const total = (query) => {
    return User.count(query);
}

module.exports = {
    insert,
    list,
    userLogin,
    total
}