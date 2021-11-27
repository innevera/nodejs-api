/** All Routes */
const Users = require('./Users');
const Blogs = require('./Blogs');

/** Used in Documentation and app index */
const Routes = [
    {
        path: '/users',
        direction: Users,
    }, {
        path: '/blogs',
        direction: Blogs.router,
        swaggerOptions: Blogs.swaggerOptions
    }
];

/** Exports */
module.exports = Routes;