// routes.js
const routes = require('next-routes')();

routes.add(
    'appRoute', 
    '/app/collection',
    '/app/home',
    '/app/detail/:slug'
);

module.exports = routes;
