/** All Routes */
const Users = require('./Users');
const Blogs = require('./Blogs');

/** Used in Documentation and app index */
const Routes = [
    {
        path: '/users',
        router: Users.router,
        swaggerOptions: Users.swaggerOptions,
        swaggerTag: {
            name: "User",
            description: "Operations of Users"
        }
    }, {
        path: '/blogs',
        router: Blogs.router,
        swaggerOptions: Blogs.swaggerOptions,
        swaggerTag: {
            name: "Blog",
            description: "Everything about Blogs"
        }
    }
];

/** Exports */
module.exports = Routes;