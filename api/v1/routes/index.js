/** All Routes */
const Users = require('./Users');

/** Used in Documentation and app index */
const Routes = [
    {
        name: 'Users',
        path: '/users',
        direction: Users,
        secure: { get: true, post: true, put: true, delete: true }
    }
];

/** Exports */
module.exports = Routes;