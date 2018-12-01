var helloWorldApp = angular.module('helloWorldApp', []);
    /**A constant can either be a single value such as a string, or an object.
     *  It can't be a function, and shouldn't have any logic of its own, since it's a very isolated component.
     *  In this case we have chosen to use an object with a single property.*/
    helloWorldApp.constant('moduleHeading', 'Module 1 Homework');
    helloWorldApp.controller('firstController', [
        '$scope', 'moduleHeading',
        function ($scope, moduleHeading) {
            $scope.heading = moduleHeading;
            $scope.date = (new Date).toISOString()
        }
    ]);