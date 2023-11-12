const {
  addBookHandler,
  getAllBooksHandler,
  getBookDetailHandler,
  editBookHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  }, {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  }, {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookDetailHandler,
  }, {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookHandler,
  }, {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
