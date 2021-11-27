/** All Routes */
const Users = require('./Users');
const Blogs = require('./Blogs');

/** Used in Documentation and app index */
const Routes = [
    {
        name: 'Users',
        path: '/users',
        direction: Users,
        secure: { get: true, post: true, put: true, delete: true }
    }, {
        name: 'Blogs',
        path: '/blogs',
        direction: Blogs,
        secure: { get: false, post: true, put: true, delete: true }
    }
];

/** Exports */
module.exports = Routes;