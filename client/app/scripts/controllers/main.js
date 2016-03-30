'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Todo) {
    $scope.todos = [];
    $scope.todos = Todo.query();
    
    $scope.newTodo = {task:'', isCompleted: false};
    
    // Create New Todo button
    $scope.createTodo = function() {
      if($scope.newTodo.task !== '') {
        Todo.save($scope.newTodo, function() {
          $scope.todos.push($scope.newTodo);
          $scope.newTodo = {task:'', isCompleted: false};
        });
      }
    };
    
    $scope.completed = function(todo) {
      todo.isCompleted = !todo.isCompleted;
      Todo.update({id: todo._id}, todo, function() {
        //console.log('completed todo updated');
      });
    };
    
    // Edit button
    $scope.update = function(todo) {
      resetStates();
      todo.updatedTask = todo.task;
      todo.isEditing = true;
    };
    // Edit -> Save button
    $scope.confirmUpdate = function(todo) {
      todo.task = todo.updatedTask;
      Todo.update({id: todo._id}, todo, function() {
        todo.task = todo.updatedTask;
        todo.isEditing = false;
      });
      
      
    };
    // Edit -> Cancel button
    $scope.refuseUpdate = function(todo) {
      todo.isEditing = false;
    };
    
    // Delete button
    $scope.delete = function(todo) {
      resetStates();
      todo.isDeleting = true;
    };
    // Delete -> Yes
    $scope.confirmDelete = function(todo) {
      Todo.delete({id: todo._id}, function() {
        _.remove($scope.todos, function(t) {
          return todo._id === t._id;
        });
        todo.isDeleting = false;
      });
    };
    // Delete -> No
    $scope.refureDelete = function(todo) {
      todo.isDeleting = false;
    };
    
    
    
    // Shows Edit and Delete buttons and hide confirmation buttons
    function resetStates() {
      $scope.todos.forEach(function(item) {
        item.isEditing = false;
        item.isDeleting = false;
      });
    }
  });
