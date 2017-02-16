'use strict';
angular.module('crewLinkApp')
  .directive('trainTimeTable', ['$compile', function () {
    return {
      templateUrl: 'views/dashboard/trainTimeTable.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $state, $window, $location, $http,$stateParams) {



     



      }
    }
  }]);
