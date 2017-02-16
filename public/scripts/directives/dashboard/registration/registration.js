'use strict';
angular.module('crewLinkApp')
  .directive('reg', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/registration.tmpl.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope, $state, $window, $location, $anchorScroll, $timeout, $http, toaster) {

        $scope.registration = {};


        $scope.submit = function () {

          console.log("" + $scope.registration.user.password);


        }


      }
    }
  }]);
