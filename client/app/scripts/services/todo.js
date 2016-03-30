'use strict';

angular.module('clientApp')

  .factory('Todo', function($resource) {
    return $resource('http://localhost:3000/todos/:id', null, {
      'update': { method: 'PUT' }
    });
  });
 