const Router = require('koa-router');
const posts = require('./posts');
const reservations = require('./reservations');
const books=require("./books");
const api = new Router();

api.use('/posts' , posts.routes());
api.use('/books' , books.routes());
api.use('/reservations' , reservations.routes());

module.exports = api;