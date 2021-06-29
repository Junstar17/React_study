const Router = require('koa-router');
const booksCtrl = require('./books.ctrl');
const books = new Router();

books.get('/email/:email', booksCtrl.listByUser);
books.put('/:uid', booksCtrl.editBook);
books.post('/',booksCtrl.write);

module.exports = books;