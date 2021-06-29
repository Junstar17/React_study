const Router = require('koa-router');
const reservationsCtrl = require('./reservations.ctrl');
const reservations = new Router();

// 예약 전체 조회
reservations.get('/', reservationsCtrl.list);
// 유저별 예약 조회
reservations.get('/user/:email', reservationsCtrl.userList);
// 도서 예약 조회
reservations.get('/book/:bookid', reservationsCtrl.bookList);
// 도서 예약
reservations.post('/', reservationsCtrl.write);
// 도서 반납
reservations.post('/return', reservationsCtrl.return);
// 도서 검색
reservations.get('/search/:keyword', reservationsCtrl.searchList);
//도서 추가
reservations.post('/book', reservationsCtrl.register);

// reservations.delete('/:id', reservationsCtrl.remove);
// reservations.put('/:id', reservationsCtrl.replace);
// reservations.patch('/:id', reservationsCtrl.update);

module.exports = reservations;