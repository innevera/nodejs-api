/** All Routes */
const Users = require('./Users');
const Blogs = require('./Blogs');
const BlogCategories = require('./BlogCategories');

/** Used in Documentation and app index */
const Routes = [
    {
        path: Users.path,
        router: Users.router,
        swaggerOptions: Users.swaggerOptions,
        swaggerTag: {
            name: "User",
            description: "Operations of Users"
        }
    }, {
        path: Blogs.path,
        router: Blogs.router,
        swaggerOptions: Blogs.swaggerOptions,
        swaggerTag: {
            name: "Blog",
            description: "Everything about Blogs"
        }
    }, {
        path: BlogCategories.path,
        router: BlogCategories.router,
        swaggerOptions: BlogCategories.swaggerOptions,
        swaggerTag: {
            name: "Blog Categories",
            description: "Everything about Blog Categories"
        }
    }
];

/** Exports */
module.exports = Routes;