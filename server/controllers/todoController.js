var restful = require('node-restful');

module.exports = function(app, route) {
  
  // Setup controller for REST
  var rest = restful
    .model('todos', app.models.todo)
    .methods(['get', 'put', 'post', 'delete']);
  
  rest.register(app, route);
  
  return function(req, res, next) {
    next();
  };
};