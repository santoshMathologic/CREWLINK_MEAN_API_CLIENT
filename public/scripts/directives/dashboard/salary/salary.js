'use strict';
angular.module('crewLinkApp')
  .directive('salary', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/salary.tmpl.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope, $state, $window, $location, $anchorScroll, $timeout, $http, toaster) {
       



      }
    }
  }]);
